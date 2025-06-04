import prettier from "prettier";
import prettierPluginXQuery from "../src/main.ts";

import "@picocss/pico";

// Register the jinn-codemirror web component
import "@jinntec/jinn-codemirror";

const codemirror = document.getElementById("input")! as HTMLElement & { content: string };
const outputcodemirror = document.getElementById("output")! as HTMLElement & { content: string };

let isRunningUpdate = false;
const format = async () => {
	if (isRunningUpdate) {
		return;
	}
	isRunningUpdate = true;

	try {
		const code = codemirror.content;

		const newurl = new URL(window.location.href);
		newurl.searchParams.set("state", await encodeState({ version: 1, xquery: code }));
		window.history.replaceState(null, "", newurl);

		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [prettierPluginXQuery],
		});

		outputcodemirror.content = result;
	} catch (e) {
		outputcodemirror.content = e.toString();
	} finally {
		isRunningUpdate = false;
	}
};
codemirror.addEventListener("update", () => {
	format();
});

const encodeState = async (state: { version: number; xquery: string }) => {
	const stateAsString = JSON.stringify(state);
	const encoder = new TextEncoder();

	// Create stream with the JSON string
	const stream = new ReadableStream({
		start(controller) {
			controller.enqueue(encoder.encode(stateAsString));
			controller.close();
		},
	});

	// Compress the stream
	const compressed = stream.pipeThrough(new CompressionStream("gzip"));
	const reader = compressed.getReader();

	// Collect all chunks into a single Uint8Array
	const chunks: Uint8Array[] = [];
	let totalLength = 0;

	for (let { done, value } = await reader.read(); !done; { done, value } = await reader.read()) {
		chunks.push(value);
		totalLength += value.length;
	}

	// Combine all chunks
	const compressed_data = new Uint8Array(totalLength);
	let offset = 0;
	for (const chunk of chunks) {
		compressed_data.set(chunk, offset);
		offset += chunk.length;
	}

	// Convert to base64 for URL safety
	const base64 = btoa(String.fromCharCode(...compressed_data));

	// Make it URL-safe by replacing characters
	return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
};

const decodeState = async (compressedState: string): Promise<{ version: number; xquery: string }> => {
	if (!compressedState) {
		return {
			version: 1,
			xquery: '"Hello World!"',
		};
	}

	try {
		// Restore base64 padding and characters
		let base64 = compressedState.replace(/-/g, "+").replace(/_/g, "/");
		while (base64.length % 4) {
			base64 += "=";
		}

		// Convert base64 back to binary
		const binaryString = atob(base64);
		const compressed_data = new Uint8Array(binaryString.length);
		for (let i = 0; i < binaryString.length; i++) {
			compressed_data[i] = binaryString.charCodeAt(i);
		}

		// Create stream from compressed data
		const stream = new ReadableStream({
			start(controller) {
				controller.enqueue(compressed_data);
				controller.close();
			},
		});

		// Decompress
		const decompressed = stream.pipeThrough(new DecompressionStream("gzip"));
		const reader = decompressed.getReader();
		const decoder = new TextDecoder();

		let result = "";
		for (let { done, value } = await reader.read(); !done; { done, value } = await reader.read()) {
			result += decoder.decode(value, { stream: true });
		}
		result += decoder.decode(); // Flush any remaining bytes

		return JSON.parse(result);
	} catch (error) {
		console.error("Error decoding state:", error);
		return {
			version: 1,
			xquery: error.toString(),
		};
	}
};

decodeState(new URLSearchParams(location.search).get("state")!).then(({ version, xquery }) => {
	codemirror.content = xquery;
});

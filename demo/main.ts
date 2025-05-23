import prettier from 'prettier';
import prettierPluginXQuery from '../src/main.ts';

import '@picocss/pico';

// Register the jinn-codemirror web component
import '@jinntec/jinn-codemirror';

const codemirror = document.getElementById('input')! as (HTMLElement & { content: string });

const formatButton = document.getElementById('format');

formatButton?.addEventListener('click', async () => {
	const code = codemirror.content;
	const result = await prettier.format(code, {
		parser: 'xquery',
		plugins: [prettierPluginXQuery],
	});

	codemirror.content = result;
});

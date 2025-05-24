import { type TestContext, describe, it } from "node:test";
import findCommentsInWhitespace from '../src/findCommentsInWhitespace.ts';
import { CommentNode } from "../src/tree.ts";

const assertComments = (t: TestContext, actual: CommentNode[], expected: {begin: number, end: number, value: string}[]) => {
	t.assert.equal(actual.length, expected.length, 'The same amount of comments should be there');

	for (let i = 0; i < actual.length; ++i) {
		const a = actual[i];
		const e = expected[i];
		t.assert.equal(a.begin, e.begin, `The begin field must be equal for ${a}`)
		t.assert.equal(a.end, e.end, `The end field must be equal for ${a}`)
		t.assert.equal(a.value, e.value, `The value field must be equal for ${a}`)
	}
}

describe('findCommentsInWhitespace', () => {
	it('Finds nothing in pure whitespace', (t) => {
		const input = ' ';
		const result = findCommentsInWhitespace(input, 0);
		t.assert.deepEqual(result, [], 'No comments should be found');
	})

	it('Finds a single comment', (t) => {
		const input = '(: A :)';
		const result = findCommentsInWhitespace(input, 0);
		assertComments(t, result, [{begin: 0, end: 7, value: '(: A :)'}]);		
	})

	it('Finds a single comment halfway the whitespace', (t) => {
		const input = '    (: A :)';
		const result = findCommentsInWhitespace(input, 0);
		assertComments(t, result, [{begin: 4, end: 11, value: '(: A :)'}]);		
	})

	it('Finds a single comment halfway the script', (t) => {
		const input = '(: A :)';
		const result = findCommentsInWhitespace(input, 10);
		assertComments(t, result, [{begin: 10, end: 17, value: '(: A :)'}]);		
	})

	it('finds two comments', (t) => {
		const input = '(: A :)  (: B :)';
		const result = findCommentsInWhitespace(input, 0);
		assertComments(
			t,
			result,
			[
				{begin: 0, end: 7, value: '(: A :)'},
				{begin: 9, end: 16, value: '(: B :)'}
			]);		
	});

	it('handles nested comments', (t) => {
		const input = '(: A (: B :) :)';
		const result = findCommentsInWhitespace(input, 0);
		assertComments(
			t,
			result,
			[
				{begin: 0, end: 15, value: '(: A (: B :) :)'},
			]);		
	});
})

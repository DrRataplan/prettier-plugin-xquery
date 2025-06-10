import {util} from 'prettier';
import { NonCommentNode } from '../../tree.ts';

export default function isPreviousLineEmpty(node: NonCommentNode, {originalText}: {originalText: string}) {
	if (node.comments && node.comments.length) {
		return util.isPreviousLineEmpty(originalText, node.comments[0].begin)
	}
	return util.isPreviousLineEmpty(originalText, node.begin);
}

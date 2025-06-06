import {util} from 'prettier';
import { Node } from '../../tree.ts';

export default function isPreviousLineEmpty(node: Node, {originalText}: {originalText: string}) {
	if (node.comments && node.comments.length) {
		return util.isPreviousLineEmpty(originalText, node.comments[0].begin)
	}
	return util.isPreviousLineEmpty(originalText, node.begin);
}

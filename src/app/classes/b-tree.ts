import { Tree234 } from './tree234';
import { DataItem } from './data-item';
import { Node } from './node';

export class BTree extends Tree234 {

	public split(thisNode: Node): void {
		const items =  new Array<DataItem>(Math.floor((Node.order / 2) - 1));
		let parent: Node;
		const children = new Array<Node>(items.length + 1);
		let itemIndex: number;

		let childToDisconnect = Node.order - 1;
		for (let i = 0; i < items.length; i++) {
			items[i] = thisNode.removeItem();
			console.log('item removed: ' + items[i].dData);
		}
		for (let i = 0; i < children.length; i++) {
			children[i] = thisNode.disconnectChild(childToDisconnect);
			childToDisconnect--;
		}

		const newRight = new Node();

		if (thisNode === this.root) {
			this.root = new Node();
			parent = this.root;
			this.root.connectChild(0, thisNode);
		} else {
			parent = thisNode.getParent();
		}

		itemIndex = parent.insertItem(thisNode.removeItem());
		const n = parent.getNumItems();

		for (let i = n - 1; i > itemIndex; i--) {
			const temp = parent.disconnectChild(i);
			parent.connectChild(i + 1, temp);
		}

		parent.connectChild(itemIndex + 1, newRight);

		for (let i = 0; i < items.length; i++) {
			newRight.insertItem(items[i]);
		}
		for (let i = 0; i < children.length; i++) {
			newRight.connectChild(i, children[i]);
		}

	}
}

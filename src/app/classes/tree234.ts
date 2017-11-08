import { Node } from './node';
import { DataItem } from './data-item';

export class Tree234 {
	public root: Node;
	public generations: number[];

	constructor() {
		this.root = new Node();
		this.generations = new Array<number>();
	}

	public find(key: any): number {
		let curNode = this.root;
		let childNumber;

		while (true) {
			if ((childNumber = curNode.findItem(key)) !== -1) {
				return childNumber; // found it
			} else if (curNode.isLeaf()) {
				return -1;			// Cant find it
			} else {				// Search deeper
				curNode = this.getNextChild(curNode, key);
			}
		}
	}

	public insert(dValue: any): void {
		let curNode = this.root;
		const tempItem = new DataItem(dValue);

		while (true) {
			if (curNode.isFull()) {          // if node full,
				this.split(curNode);                   // split it
				curNode = curNode.getParent();    // back up
				curNode = this.getNextChild(curNode, dValue); // search once
			} else if (curNode.isLeaf()) {         // if node is leaf,
				break;                            // go insert
			} else { // node is not full, not a leaf; so go to lower level
				curNode = this.getNextChild(curNode, dValue);
			}
		}  // end while

		curNode.insertItem(tempItem);       // insert new DataItem
	}

	public split(thisNode: Node): void {
		let itemB: DataItem;
		let itemC: DataItem;
		let parent: Node;
		let child2: Node;
		let child3: Node;
		let itemIndex: number;

		itemC = thisNode.removeItem();
		console.log('itemC removed: ' + itemC.dData);
		itemB = thisNode.removeItem();
		console.log('itemB removed: ' + itemB.dData);

		child2 = thisNode.disconnectChild(2);
		child3 = thisNode.disconnectChild(3);

		const newRight = new Node();

		if (thisNode === this.root) {
			this.root = new Node();
			parent = this.root;
			this.root.connectChild(0, thisNode);
		} else {
			parent = thisNode.getParent();
		}

		itemIndex = parent.insertItem(itemB);
		const n = parent.getNumItems();

		for (let i = n - 1; i > itemIndex; i--) {
			const temp = parent.disconnectChild(i);
			parent.connectChild(i + 1, temp);
		}

		parent.connectChild(itemIndex + 1, newRight);

		newRight.insertItem(itemC);
		newRight.connectChild(0, child2);
		newRight.connectChild(1, child3);

	}

	public getNextChild(theNode: Node, theValue: any): Node {
		let j;

		// Assume the node is not empty, not full, and not a leaf
		const numItems = theNode.getNumItems();
		for (j = 0; j < numItems; j++) {	// For each item in the node
			if (theValue < theNode.getItem(j).dData) {	// Are we less?
				return theNode.getChild(j);	// return left child
			}
		} // end for			// We're greater so
		return theNode.getChild(j); // Return right child
	}

	public logTree(): void {
		this.recLogTree(this.root, 0, 0);
	}

	private recLogTree(thisNode: Node, level: number, childNumber: number) {
		console.log('level: ' + level + ' child: ' + childNumber + ' ');
		thisNode.logNode();

		const numItems = thisNode.getNumItems();
		for (let i = 0; i < numItems + 1; i++) {
			const nextNode = thisNode.getChild(i);
			if (nextNode !== undefined) {
				this.generations.push(1);
				this.recLogTree(nextNode, level + 1, i);
			} else {
				return;
			}
		}
	}
}

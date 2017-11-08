import {DataItem} from './data-item';

export class Node {
	public static order = 4;
	private numItems = 0;
	private parent: Node;
	public childArray: Node[];
	public itemArray: DataItem[];

	// -------------------------------------------------------------

	constructor() {
		console.log('Node created');
		this.childArray = new Array<Node>(Node.order);
		this.itemArray = new Array<DataItem>(Node.order - 1);
	}

	// Connect child to this node
	public connectChild(childNum: number, child: Node): void {
		this.childArray[childNum] = child;
		if (child !== undefined) {
			child.parent = this;
		}
		console.log('child connected');
	}

	// Disconnect child from this node and return it
	public disconnectChild(childNum: number): Node {
		console.log('child disconnected');
		const tempNode = this.childArray[childNum];
		this.childArray[childNum] = undefined;
		return tempNode;
	}

	public getChild(childNum: number): Node {
		return this.childArray[childNum];
	}

	public getParent(): Node {
		return this.parent;
	}

	public isLeaf(): boolean {
		return (this.childArray[0] === undefined) ? true : false;
	}

	public getNumItems(): number {
		return this.numItems;
	}

	public getItem(index: number): DataItem {
		return this.itemArray[index];
	}

	public isFull(): boolean {
		return (this.numItems === Node.order - 1) ? true : false;
	}

	// Return the index of the item within this node, if not found return -1
	public findItem(key: any): number {
		for (let j = 0; j < Node.order - 1; j++) {
			if (this.itemArray[j] === undefined) {
				break;
			} else if (this.itemArray[j].dData === key) {
				return j;
			}
		}
		return -1;
	}

	public insertItem(newItem: DataItem): number {

		// Assumes node is not full
		this.numItems++;
		const newKey = newItem.dData;

		for (let i = Node.order - 2; i >= 0; i--) { // Start on the right and examine the items
			if (this.itemArray[i] === undefined) {		// If item is null
				continue;							// go left one cell
			} else {								// not null
				const itsKey = this.itemArray[i].dData; // Get it's key
				if (newKey < itsKey) {				// If it's bigger
					this.itemArray[i + 1] = this.itemArray[i]; // Shift it right
				} else {
					this.itemArray[i + 1] = newItem; // Insert newItem
					return i + 1;					// Return index to newItem
				}
			} // end else (not null)
		} // end for							// Shifted all items
		this.itemArray[0] = newItem;
		return 0;
	}

	public isEmpty(): boolean {
		return this.itemArray[0] !== undefined;
	}

	// Removes larget item
	public removeItem(): DataItem {

		// Assumes node is not empty
		const temp = this.itemArray[this.numItems - 1]; // Save item
		this.itemArray[this.numItems - 1] = undefined;		// Disconnect it
		this.numItems--;
		return temp;
	}

	public logNode(): void {
		for (let i = 0; i < this.numItems; i++) {
			console.log(this.itemArray[i].dData);
		}
	}
}

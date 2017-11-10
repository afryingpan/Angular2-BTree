import { Injectable } from '@angular/core';
import { Tree234 } from '../classes/tree234';
import { BTree } from '../classes/b-tree';
import { Node } from '../classes/node';

export class TreeService {
	root: Node;
	theTree: Tree234;

	constructor() {
		this.theTree = new Tree234();
		this.root = this.theTree.root;
	}

	public insert(value: any) {
		this.theTree.insert(value);
		this.theTree.logTree();
		this.root = this.theTree.root;
	}

	public populate(): void {
		this.theTree = new Tree234();
		const itemAmount = Math.floor(Math.random() * 25) + 1;
		for (let i = 0; i < itemAmount; i++) {
			const item = Math.floor(Math.random() * 100) + 1;
			this.insert(item);
		}
	}

	public clear(): void {
		this.theTree = new Tree234();
		this.root = this.theTree.root;
	}

	public changeOrder(value: number): void {
		Node.order = value;
		if (Node.order < 4) {
			Node.order = 4;
		} else if (Node.order < 5) {
			const tempTree = new Tree234();
			if (this.theTree.root.itemArray[0] !== undefined) {
				for (let i = 0; i < this.theTree.allItems.length; i++) {
					tempTree.insert(this.theTree.allItems[i]);
				}
			}
			this.theTree = tempTree;
		} else {
			const tempTree = new BTree();
			if (this.theTree.root.itemArray[0] !== undefined) {
				for (let i = 0; i < this.theTree.allItems.length; i++) {
					tempTree.insert(this.theTree.allItems[i]);
				}
			}
			this.theTree = tempTree;
		}
		this.root = this.theTree.root;
	}
}

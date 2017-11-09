import { Injectable } from '@angular/core';
import { Tree234 } from '../classes/tree234';
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
}

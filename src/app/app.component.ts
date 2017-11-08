import { Component } from '@angular/core';
import { Tree234 } from './classes/tree234';
import { Node } from './classes/node';
import { D3Service, D3, HierarchyCircularNode, HierarchyPointLink } from 'd3-ng2-service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	value: any;
	root: Node;
	theTree: Tree234;

	public level = 0;
	public child = 0;

	constructor() {
		this.theTree = new Tree234();
		this.theTree.logTree();
		this.root = this.theTree.root;
		// this.getNodes(this.theTree.root);
	}

	/*private getNodes(thisNode: Node) {
		this.nodes.push(thisNode);

		const numItems = thisNode.getNumItems();
		for (let i = 0; i < numItems + 1; i++) {
			const nextNode = thisNode.getChild(i);
			if (nextNode !== undefined) {
				this.getNodes(nextNode);
			} else {
				return;
			}
		}
	}*/

	public isValid(data: any): boolean {
		return data !== undefined;
	}

	public insert(value: any) {
		this.theTree.insert(value);
		this.theTree.logTree();
		this.root = this.theTree.root;
	}

	public isEmpty(): boolean {
		return this.root.isEmpty();
	}
}

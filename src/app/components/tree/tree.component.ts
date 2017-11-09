import { Component } from '@angular/core';
import { Tree234 } from '../../classes/tree234';
import { Node } from '../../classes/node';
import { TreeService } from '../../services/tree.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
	selector: 'app-tree',
	templateUrl: './tree.component.html',
	styleUrls: ['./tree.component.css']
})
export class TreeComponent {
	value: any;
	root: Node;
	theTree: Tree234;

	options: FormGroup;

	constructor(private tree: TreeService, private fb: FormBuilder) {
		this.theTree = tree.theTree;
		this.theTree.logTree();
		this.root = tree.root;
		this.options = fb.group({
			hideRequired: false,
			floatPlaceholder: 'auto',
		});
	}

	public insert(value: any) {
		this.tree.insert(value);
		this.root = this.tree.root;
	}
}

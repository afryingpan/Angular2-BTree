import { Component } from '@angular/core';
import { Tree234 } from '../../classes/tree234';
import { Node } from '../../classes/node';
import { TreeService } from '../../services/tree.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Element } from '@angular/compiler';


@Component({
	selector: 'app-tree',
	templateUrl: './tree.component.html',
	styleUrls: ['./tree.component.css']
})
export class TreeComponent {
	value: any;
	theTree: Tree234;
	order: number;
	options: FormGroup;

	constructor(public tree: TreeService, private fb: FormBuilder) {
		this.options = fb.group({
			hideRequired: false,
			floatPlaceholder: 'auto',
		});
		this.order = Node.order;
	}

	public insert(value: any) {
		this.tree.insert(value);
		this.value = null;
	}

	public clear(): void {
		this.tree.clear();
	}

	public populate(): void {
		this.tree.populate();
	}

	public orderUp(): void {
		this.tree.changeOrder(++Node.order);
		this.order = Node.order;
		console.log(Node.order);
	}

	public orderDown(): void {
		this.tree.changeOrder(--Node.order);
		this.order = Node.order;
		console.log(Node.order);
	}
}

export class DataItem  {
	public dData: any;

	constructor(dData: any) {
		console.log('DataItem created: ' + dData);
		this.dData = dData;
	}

	getData() {
		if (this.dData !== undefined) {
			return this.dData;
		} else {
			return;
		}
	}

	public logItem(): void {
		console.log('/' + this.dData);
	}
}

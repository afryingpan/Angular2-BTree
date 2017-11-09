import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
	imports: [MatButtonModule, MatFormFieldModule, MatInputModule],
	exports: [MatButtonModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule { }

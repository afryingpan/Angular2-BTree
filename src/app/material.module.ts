import { MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
	imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule],
	exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule]
})
export class MaterialModule { }

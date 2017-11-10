import { MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
	imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatIconModule],
	exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatIconModule]
})
export class MaterialModule { }

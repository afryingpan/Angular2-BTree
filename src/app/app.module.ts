import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeService } from './services/tree.service';
@NgModule({
	declarations: [
		AppComponent,
		TreeComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [TreeService],
	bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { D3Service } from 'd3-ng2-service'; // <-- import statement

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

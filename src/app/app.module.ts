import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import {FormsModule} from '@angular/forms';
import {ReverseStringClass,uselessPipe,FlyingHeroesPipe} from './reverseFilter.pipe'
@NgModule({
  declarations: [
    AppComponent,
    PipeExampleComponent,
    ReverseStringClass,
    uselessPipe,
    FlyingHeroesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

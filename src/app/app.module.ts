import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { PipesComponent } from './pipes/pipes.component';
import { ExampleComponent } from './pipes/example.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PipesComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

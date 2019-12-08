import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CardSimpleComponent } from './components/card/card-simple/card-simple.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    CardSimpleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

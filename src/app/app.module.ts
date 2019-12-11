import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertComponent } from './components/alert/alert.component';
import { CardSimpleComponent } from './components/card/card-simple/card-simple.component';
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import { RichTextViewerComponent } from './components/rich-text-viewer/rich-text-viewer.component';
import { DebounceClickDirective } from './directive/debounce-click/debounce-click.directive';
import { PercentFormatPipe } from './pipes/percent-format/percent-format.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AlertComponent,
    CardSimpleComponent,
    CreditCardInputComponent,
    DebounceClickDirective,
    PercentFormatPipe,
    RichTextViewerComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

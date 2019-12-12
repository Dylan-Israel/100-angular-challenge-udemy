import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertComponent } from './components/alert/alert.component';
import { CardSimpleComponent } from './components/card/card-simple/card-simple.component';
import { ComponentsComponent } from './components/components.component';
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { RichTextViewerComponent } from './components/rich-text-viewer/rich-text-viewer.component';
import { DebounceClickDirective } from './directives/debounce-click/debounce-click.directive';
import { DirectivesComponent } from './directives/directives.component';
import { PercentFormatPipe } from './pipes/percent-format/percent-format.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AlertComponent,
    CardSimpleComponent,
    ComponentsComponent,
    CreditCardInputComponent,
    DebounceClickDirective,
    DirectivesComponent,
    EmailFormComponent,
    PercentFormatPipe,
    ProgressBarComponent,
    RichTextViewerComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

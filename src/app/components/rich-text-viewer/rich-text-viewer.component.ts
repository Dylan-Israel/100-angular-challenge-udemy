import { Component, EventEmitter, Input, Output } from '@angular/core';
import { htmlValid } from './models/data/html-valid.data';

@Component({
  selector: 'app-rich-text-viewer',
  templateUrl: './rich-text-viewer.component.html',
  styleUrls: ['./rich-text-viewer.component.scss']
})
export class RichTextViewerComponent {
  @Output() public isValid = new EventEmitter<boolean>();
  public validHtml = '';
  @Input() public set htmlText(value: string) {
    const html = this.parseForNonEmptyHtml(value);
    const isValidHtml = htmlValid.test(html);
    this.validHtml = isValidHtml ? html : '';
    this.isValid.emit(this.validHtml.length > 0);
  }

  private parseForNonEmptyHtml(html: string = '') {
    const htmlTags: RegExp = /<[^]*?>/g;
    const hasContent = html.replace(htmlTags, '').trim().length > 0;

    return hasContent ? html : '';
  }
}

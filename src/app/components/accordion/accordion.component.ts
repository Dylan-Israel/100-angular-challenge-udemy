import { Component, Input } from '@angular/core';
import { AccordionListItem } from './models/accordion-list-item.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() public accordionItems: AccordionListItem[] = [];

  public toggle(listItem: AccordionListItem): void {
    if (listItem.isExpanded) {
      listItem.isExpanded = false;
    } else {
      this.accordionItems.forEach((item) => item.isExpanded = (item === listItem));
    }
  }
}

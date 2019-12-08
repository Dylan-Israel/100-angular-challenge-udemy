export class AccordionListItem {
  public title: string;
  public content: string;
  public isExpanded: boolean;

  constructor(data: any = {}) {
    this.title = data.title ? data.title : '';
    this.content = data.content ? data.content : '';
    this.isExpanded = data.isExpanded ? data.isExpanded : false;
  }
}

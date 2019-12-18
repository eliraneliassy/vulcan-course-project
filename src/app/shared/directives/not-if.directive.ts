import { Directive, TemplateRef, ViewContainerRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appNotIf]'
})
export class NotIfDirective {

  @Input() set appNotIf(condition: boolean) {
    if (condition) {
      this.viewConatinerRef.clear();
    } else {
      this.viewConatinerRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewConatinerRef: ViewContainerRef
  ) { }



}

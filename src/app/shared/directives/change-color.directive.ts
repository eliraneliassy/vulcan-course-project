import { Directive, ElementRef, OnInit, AfterViewInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit {

  @Input() color: string;

  constructor(private element: ElementRef, private rendrer: Renderer2) {

  }

  ngAfterViewInit(): void {
    // this.element.nativeElement.style.background = 'red';
    this.rendrer.setStyle(this.element.nativeElement, 'background-color', this.color);
  }

}

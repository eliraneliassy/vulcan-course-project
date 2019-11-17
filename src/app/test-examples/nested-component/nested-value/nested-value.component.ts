import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nested-value',
  templateUrl: './nested-value.component.html',
  styleUrls: ['./nested-value.component.scss']
})
export class NestedValueComponent {

  @Input() value: number;

}

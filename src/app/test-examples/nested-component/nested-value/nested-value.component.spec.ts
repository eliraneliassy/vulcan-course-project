import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedValueComponent } from './nested-value.component';

describe('NestedValueComponent', () => {
  let component: NestedValueComponent;
  let fixture: ComponentFixture<NestedValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

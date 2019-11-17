
import { ButtonComponent } from './button/button.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedComponentComponent } from './nested-component.component';
import { NestedValueComponent } from './nested-value/nested-value.component';
import { By } from '@angular/platform-browser';

describe('NestedComponentComponent', () => {
  let component: NestedComponentComponent;
  let fixture: ComponentFixture<NestedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedComponentComponent, ButtonComponent, NestedValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should increase and decrease the counter value', () => {
    const incrementControl = fixture.debugElement.query(By.css('.btn-increment'));
    // const decrementControl = fixture.debugElement.query(By.css('.btn-decrement'));
    const valueSpan = fixture.nativeElement.querySelector('[data-testid]');

    incrementControl.nativeElement.click();
    incrementControl.nativeElement.click();

    fixture.detectChanges();

    expect(component.value).toEqual(2);
    expect(valueSpan.innerText).toEqual('2');

    // decrementControl.nativeElement.click();

    // fixture.detectChanges();

    // expect(component.value).toEqual(1);
    // expect(valueSpan.innerText).toEqual('1');

  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleComponentComponent } from './single-component.component';
import { By } from '@angular/platform-browser';

describe('SingleComponentComponent', () => {
  let component: SingleComponentComponent;
  let fixture: ComponentFixture<SingleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase and decrease the counter value', () => {
    const incrementControl = fixture.debugElement.query(By.css('.btn-increment'));
    const decrementControl = fixture.debugElement.query(By.css('.btn-decrement'));

    const valueSpan = fixture.nativeElement.querySelector('[data-testid]');

    incrementControl.nativeElement.click();
    incrementControl.nativeElement.click();

    fixture.detectChanges();

    expect(component.value).toEqual(2);
    expect(valueSpan.innerText).toEqual('2');

    decrementControl.nativeElement.click();

    fixture.detectChanges();

    expect(component.value).toEqual(1);
    expect(valueSpan.innerText).toEqual('1');

  });
});

import { TemplateRef, Component, DebugElement } from '@angular/core';
import { NotIfDirective } from './not-if.directive';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


@Component({
  template: `
  <div *appNotIf="false">Sholud show</div>
  <div *appNotIf="true">Shouldn't show</div>
  `
})
class TestComponent { }

describe('NotIfDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [NotIfDirective, TestComponent]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.debugElement.componentInstance;

      });


  }));

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should show and hide elements', () => {
    fixture.detectChanges();
    des = fixture.debugElement.queryAll(By.css('div'));
    expect(des.length).toEqual(1);
  });
});

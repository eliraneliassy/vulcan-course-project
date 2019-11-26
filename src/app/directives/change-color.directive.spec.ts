import { by } from 'protractor';
import { ChangeColorDirective } from './change-color.directive';
import { Component, ElementRef, Renderer2, Type, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <h2 appChangeColor>Something Yellow</h2>
  <h2 appChangeColor [color]="'red'">Something red</h2>
  `
})
class TestComponent { }

describe('ChangeColorDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];
  let h2NoDirective;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ChangeColorDirective, TestComponent]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.debugElement.componentInstance;
        des = fixture.debugElement.queryAll(By.directive(ChangeColorDirective));
        h2NoDirective = fixture.debugElement.query(By.css('h2:not([appChangeColor])'));

      });


  }));

  it('should create an instance', () => {
    expect(component).toBeTruthy();

  });

  it('should have three highlighted elements', () => {
    expect(des.length).toBe(2);
  });

  it('should color 1st <h2> background "yellow"', () => {

    fixture.detectChanges();

    expect(des[0].nativeElement.style.backgroundColor).toBe('yellow');

  });

  it('should color 2st <h2> background "red"', () => {

    fixture.detectChanges();

    expect(des[1].nativeElement.style.backgroundColor).toBe('red');

  });


});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAllComponent } from './component-all.component';

describe('ComponentAllComponent', () => {
  let component: ComponentAllComponent;
  let fixture: ComponentFixture<ComponentAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

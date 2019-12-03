import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteGComponent } from './carte-g.component';

describe('CarteGComponent', () => {
  let component: CarteGComponent;
  let fixture: ComponentFixture<CarteGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteGraphiqueComponent } from './carte-graphique.component';

describe('CarteGraphiqueComponent', () => {
  let component: CarteGraphiqueComponent;
  let fixture: ComponentFixture<CarteGraphiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteGraphiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteGraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

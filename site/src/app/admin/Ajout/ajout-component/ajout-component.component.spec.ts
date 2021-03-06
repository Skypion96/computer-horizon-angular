import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutComponentComponent } from './ajout-component.component';

describe('AjoutComponentComponent', () => {
  let component: AjoutComponentComponent;
  let fixture: ComponentFixture<AjoutComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

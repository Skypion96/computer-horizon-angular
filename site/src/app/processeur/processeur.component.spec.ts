import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesseurComponent } from './processeur.component';

describe('ProcesseurComponent', () => {
  let component: ProcesseurComponent;
  let fixture: ComponentFixture<ProcesseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

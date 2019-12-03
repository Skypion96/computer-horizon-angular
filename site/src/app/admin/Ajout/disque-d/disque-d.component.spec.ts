import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisqueDComponent } from './disque-d.component';

describe('DisqueDComponent', () => {
  let component: DisqueDComponent;
  let fixture: ComponentFixture<DisqueDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisqueDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisqueDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

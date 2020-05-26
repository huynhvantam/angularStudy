import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cha1Component } from './cha1.component';

describe('Cha1Component', () => {
  let component: Cha1Component;
  let fixture: ComponentFixture<Cha1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cha1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cha1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

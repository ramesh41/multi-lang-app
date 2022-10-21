import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorC404Component } from './error-c404.component';

describe('ErrorC404Component', () => {
  let component: ErrorC404Component;
  let fixture: ComponentFixture<ErrorC404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorC404Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorC404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

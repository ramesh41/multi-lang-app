import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajbharHistoryComponent } from './rajbhar-history.component';

describe('RajbharHistoryComponent', () => {
  let component: RajbharHistoryComponent;
  let fixture: ComponentFixture<RajbharHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajbharHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RajbharHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

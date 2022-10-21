import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDaySectionComponent } from './history-day-section.component';

describe('HistoryDaySectionComponent', () => {
  let component: HistoryDaySectionComponent;
  let fixture: ComponentFixture<HistoryDaySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryDaySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryDaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsSectionComponent } from './tags-section.component';

describe('TagsSectionComponent', () => {
  let component: TagsSectionComponent;
  let fixture: ComponentFixture<TagsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPostagensComponent } from './grid-postagens.component';

describe('GridPostagensComponent', () => {
  let component: GridPostagensComponent;
  let fixture: ComponentFixture<GridPostagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPostagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridPostagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

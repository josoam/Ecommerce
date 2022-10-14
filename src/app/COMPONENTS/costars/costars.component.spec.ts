import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostarsComponent } from './costars.component';

describe('CostarsComponent', () => {
  let component: CostarsComponent;
  let fixture: ComponentFixture<CostarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsatananaComponent } from './asatanana.component';

describe('AsatananaComponent', () => {
  let component: AsatananaComponent;
  let fixture: ComponentFixture<AsatananaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsatananaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsatananaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

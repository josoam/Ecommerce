import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsatananasComponent } from './asatananas.component';

describe('AsatananasComponent', () => {
  let component: AsatananasComponent;
  let fixture: ComponentFixture<AsatananasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsatananasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsatananasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

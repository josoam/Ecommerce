import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostarComponent } from './costar.component';

describe('CostarComponent', () => {
  let component: CostarComponent;
  let fixture: ComponentFixture<CostarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

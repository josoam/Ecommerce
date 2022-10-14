import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenissComponent } from './teniss.component';

describe('TenissComponent', () => {
  let component: TenissComponent;
  let fixture: ComponentFixture<TenissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenissComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

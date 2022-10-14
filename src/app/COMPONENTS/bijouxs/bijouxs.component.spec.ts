import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BijouxsComponent } from './bijouxs.component';

describe('BijouxsComponent', () => {
  let component: BijouxsComponent;
  let fixture: ComponentFixture<BijouxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BijouxsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BijouxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

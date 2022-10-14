import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxsComponent } from './jeuxs.component';

describe('JeuxsComponent', () => {
  let component: JeuxsComponent;
  let fixture: ComponentFixture<JeuxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuxsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

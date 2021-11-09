import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioLoginComponent } from './servicio-login.component';

describe('ServicioLoginComponent', () => {
  let component: ServicioLoginComponent;
  let fixture: ComponentFixture<ServicioLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

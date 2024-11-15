import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        LoginComponent
      ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear component', () => {
    expect(component).toBeTruthy();
  });

  it('form erroneo', () => {
    expect(component.loginUsuario.valid).toBeFalsy();
  });

  it('form rellenado correctamente', () => {
    component.loginUsuario.controls['email'].setValue('test@test.com');
    component.loginUsuario.controls['contrasena'].setValue('password123');
    expect(component.loginUsuario.valid).toBeTruthy();
  });


});
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RegistrarseComponent } from './registrarse.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('RegistrarseComponent', () => {
  let component: RegistrarseComponent;
  let fixture: ComponentFixture<RegistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RegistrarseComponent
      ],
      providers: [FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty fields and invalid state', () => {
    expect(component.registroUsuario.valid).toBeFalsy();
    expect(component.registroUsuario.get('nombre')?.value).toBe('');
    expect(component.registroUsuario.get('email')?.value).toBe('');
    expect(component.registroUsuario.get('contrasena')?.value).toBe('');
  });

  it('should validate password requirements correctly', () => {
    const passwordControl = component.registroUsuario.get('contrasena');
    

    passwordControl?.setValue('password');
    expect(passwordControl?.hasError('passwordRequirements')).toBeTruthy();
    
    
    passwordControl?.setValue('Password123');
    expect(passwordControl?.valid).toBeTruthy();
  });

  it('should validate age requirement correctly', () => {
    const fechaNacControl = component.registroUsuario.get('fechaNac');
    
   
    const underageDate = new Date();
    underageDate.setFullYear(underageDate.getFullYear() - 12);
    fechaNacControl?.setValue(underageDate.toISOString().split('T')[0]);
    expect(fechaNacControl?.hasError('minAge')).toBeTruthy();
    

    const validDate = new Date();
    validDate.setFullYear(validDate.getFullYear() - 15);
    fechaNacControl?.setValue(validDate.toISOString().split('T')[0]);
    expect(fechaNacControl?.valid).toBeTruthy();
  });
});
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginUsuario!: FormGroup;
  submitted = false;
  isLoading = false;
  showSuccess = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginUsuario = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        contrasena: [
          '',
          [
            Validators.required,
          ],
        ],
      },
      {}
    );
  }

  getErrorMessage(controlName: string): string {
    const control = this.loginUsuario.get(controlName);
    if (!control) return '';

    if (control.hasError('required')) return 'Este campo es requerido';
    if (control.hasError('email')) return 'Email inválido';

    return '';
  }

  async onSubmit() {
    this.submitted = true;

    if (this.loginUsuario.valid) {
      this.isLoading = true;

      try {
        console.log('Formulario enviado:', this.loginUsuario.value);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        this.showSuccess = true;
        this.loginUsuario.reset();
        this.submitted = false;

        setTimeout(() => {
          this.showSuccess = false;
        }, 3000);
      } catch (error) {
        console.error('Error al registrar:', error);
      } finally {
        this.isLoading = false;
      }
    } else {
      Object.keys(this.loginUsuario.controls).forEach((key) => {
        const control = this.loginUsuario.get(key);
        if (control?.errors) {
          console.log(`${key} errors:`, control.errors);
        }
      });
    }
  }

  onReset() {
    this.submitted = false;
    this.loginUsuario.reset();
    this.showSuccess = false;
  }
}

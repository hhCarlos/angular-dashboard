import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  loading = false;
  error: string | null = null;

  async onSubmit() {
    if (this.form.invalid) return;
    this.loading = true; this.error = null;
    // TODO: reemplazar por AuthService + Cognito más adelante
    await new Promise(r => setTimeout(r, 700));
    this.loading = false;
    // Por ahora solo log:
    console.log('LOGIN', this.form.value);
  }
}

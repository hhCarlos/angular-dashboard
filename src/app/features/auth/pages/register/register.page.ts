import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register-page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirm: ['', [Validators.required]],
    birthdate: ['']
  });

  loading = false; error: string | null = null;

  async onSubmit() {
    if (this.form.invalid) return;
    if (this.form.value.password !== this.form.value.confirm) {
      this.error = 'Las contraseñas no coinciden'; return;
    }
    this.loading = true; this.error = null;
    await new Promise(r => setTimeout(r, 700));
    this.loading = false;
    console.log('REGISTER', this.form.value);
  }
}

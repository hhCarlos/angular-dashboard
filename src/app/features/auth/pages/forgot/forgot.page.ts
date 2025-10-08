import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-forgot-page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss']
})
export class ForgotPageComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  sent = false; loading = false;

  async onSubmit() {
    if (this.form.invalid) return;
    this.loading = true;
    await new Promise(r => setTimeout(r, 700));
    this.loading = false; this.sent = true;
  }
}

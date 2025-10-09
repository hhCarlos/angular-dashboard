import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthHeaderComponent } from '../../../shared/components/auth/header/auth-header.component';
import { AuthFooterComponent } from '../../../shared/components/auth/footer/auth-footer.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, AuthHeaderComponent, AuthFooterComponent],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {
  // Aquí podrías meter lógica común para todas las pantallas de Auth
  // como detección de ruta actual, branding, etc.
}

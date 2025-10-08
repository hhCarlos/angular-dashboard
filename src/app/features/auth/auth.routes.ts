import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "../../layout/public-layout/auth/auth-layout.component";

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            { path: 'login', loadComponent: () => import('./pages/login/login.page').then(c => c.LoginPageComponent) },
            { path: 'register', loadComponent: () => import('./pages/register/register.page').then(c => c.RegisterPageComponent) },
            { path: 'forgot', loadComponent: () => import('./pages/forgot/forgot.page').then(c => c.ForgotPageComponent) },
            { path: '', pathMatch: 'full', redirectTo: 'login' }
        ]
    }
];

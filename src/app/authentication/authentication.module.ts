import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RequestPasswordComponent } from './pages/request-password/request-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';

import { ThemeModule } from 'app/@theme/theme.module';
import { RouterModule } from '@angular/router';
import { NbInputModule, NbCardModule, NbButtonModule } from '@nebular/theme';


@NgModule({
  declarations: [LoginComponent, 
                RegisterComponent,
                RequestPasswordComponent, 
                ResetPasswordComponent, 
                AuthLayoutComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
  ]
})
export class AuthenticationModule { }

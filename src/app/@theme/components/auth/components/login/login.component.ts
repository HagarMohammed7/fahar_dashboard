/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS, NbAuthSocialLink } from '../../auth.options';
import { getDeepFromObject } from '../../helpers';

import { NbAuthService } from '../../services/auth.service';
import { NbAuthResult } from '../../services/auth-result';
import { AuthenticationService } from '../../services/authentication.service';
import { NbTokenService } from '../..';
import { NbAuthToken } from '../../services';

@Component({
  selector: 'nb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbLoginComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  usermail: string = ""
  userpassword: string = ""
  submitted: boolean = false;
  socialLinks: NbAuthSocialLink[] = [];
  rememberMe = false;
  // adminUser:{} = {'username':'admin','mobile':'123456789','email':'admin@admin.com'}

  constructor(protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
    protected tokenService: NbTokenService,
    protected authService: AuthenticationService) {

    this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    this.showMessages = this.getConfigValue('forms.login.showMessages');
    this.strategy = this.getConfigValue('forms.login.strategy');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    this.rememberMe = this.getConfigValue('forms.login.rememberMe');
  }


  login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;
    this.authService.authenticate({
      userNameOrEmailAddress: this.usermail,
      password: this.userpassword,
      rememberClient: this.rememberMe
    }).subscribe((result: any) => {
      this.submitted = false;
      if (result.success == true) {
        // set access token  
        //result.result.accessToken
        localStorage.setItem('appToken', result.result.accessToken)
        // this.tokenService.set();
        this.router.navigate(['/pages/dashboard']);

      } else {
        console.log(result);
        this.errors = ['Authentication Failed ! '];
      }
      this.cd.detectChanges();
    });

  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}

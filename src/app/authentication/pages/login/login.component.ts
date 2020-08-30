import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../@theme/components/auth/services/authentication.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  rememberMe = false;

  constructor(

    protected cd: ChangeDetectorRef,
    protected router: Router,
    protected service: AuthenticationService) {

    // this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    // this.showMessages = this.getConfigValue('forms.login.showMessages');
    // this.strategy = this.getConfigValue('forms.login.strategy');
    // this.rememberMe = this.getConfigValue('forms.login.rememberMe');
  }

  login(): void {
    debugger
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    // this.service.authenticate(this.user).then((result: any) => {
    //   this.submitted = false;
    //   debugger
    // if (result.isSuccess()) {
    //   this.messages = result.getMessages();
    // } else {
    //   this.errors = result.getErrors();
    // }

    // const redirect = result.getRedirect();
    // if (redirect) {
    //   setTimeout(() => {
    //     return this.router.navigateByUrl(redirect);
    //   }, this.redirectDelay);
    // }
    // this.cd.detectChanges();
    // });
  }


}



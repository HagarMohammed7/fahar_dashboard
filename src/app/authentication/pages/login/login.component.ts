import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

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
              protected router: Router) {

    // this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    // this.showMessages = this.getConfigValue('forms.login.showMessages');
    // this.strategy = this.getConfigValue('forms.login.strategy');
    // this.rememberMe = this.getConfigValue('forms.login.rememberMe');
  }

  login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    // this.service.authenticate(this.strategy, this.user).subscribe((result: NbAuthResult) => {
    //   this.submitted = false;

    //   if (result.isSuccess()) {
    //     this.messages = result.getMessages();
    //   } else {
    //     this.errors = result.getErrors();
    //   }

    //   const redirect = result.getRedirect();
    //   if (redirect) {
    //     setTimeout(() => {
    //       return this.router.navigateByUrl(redirect);
    //     }, this.redirectDelay);
    //   }
    //   this.cd.detectChanges();
    // });
  }


}



import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../@theme/components/auth/services/authentication.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(protected service: AuthenticationService) {

  }

  ngOnInit(): void {
  }

}

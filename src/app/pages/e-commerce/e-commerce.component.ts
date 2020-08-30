import { Component } from '@angular/core';
import { UserActive } from '../../@core/data/user-activity';

@Component({
  selector: 'ngx-ecommerce',
  styleUrls:['./e-commerce.scss'],
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
  userActivity: UserActive[] = [];
  type = 'month';
  types = ['week', 'month', 'year'];
}

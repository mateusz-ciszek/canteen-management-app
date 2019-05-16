import { Component, Input } from '@angular/core';
import { Price } from '../../models';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.less'],
})
export class PriceComponent {

  @Input()
  price: Price;

}

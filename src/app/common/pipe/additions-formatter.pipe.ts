import { Pipe, PipeTransform } from '@angular/core';
import { OrderItemAddition } from '../../models';
import { CurrencyFormatterPipe } from './currency-formatter.pipe';

@Pipe({
  name: 'additionsFormatter',
})
export class AdditionsFormatterPipe implements PipeTransform {
  transform(values: OrderItemAddition[]): string {
    const currencyPipe: CurrencyFormatterPipe = new CurrencyFormatterPipe();
    const namesWithPrice: string[] = values.map(item => `${item.foodAddition.name} (${currencyPipe.transform(item.price)})`);
    return values.length ? namesWithPrice.join(', ') : '-';
  }
}

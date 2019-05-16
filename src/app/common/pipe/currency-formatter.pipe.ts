import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
// TODO: Remove - use number pipe instead ie. number:'1.2-2'
export class CurrencyFormatterPipe implements PipeTransform {

  private defaultCurrency: string = 'zł';

  transform(value: number, requestedCurrency?: string): string {
    const currency = requestedCurrency || this.defaultCurrency;
    return `${value.toFixed(2)}\xA0${currency}`;
  }
}

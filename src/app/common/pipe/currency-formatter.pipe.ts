import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyFormatterPipe implements PipeTransform {

  private defaultCurrency: string = 'zł';

  transform(value: number, requestedCurrency?: string): string {
    const currency = requestedCurrency || this.defaultCurrency;
    return `${value.toFixed(2)} ${currency}`;
  }

}

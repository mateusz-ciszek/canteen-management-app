import { Pipe, PipeTransform } from '@angular/core';
import { OrderItemAddition } from '../../models';

@Pipe({
  name: 'additionsFormatter'
})
export class AdditionsFormatterPipe implements PipeTransform {
  transform(values: OrderItemAddition[]): string {
    return values.length ? values.map(item => item.foodAddition.name).join(', ') : '-';
  }
}

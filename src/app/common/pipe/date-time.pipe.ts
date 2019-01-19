import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {
  transform(date: Date): string {
    const day = this.format(date.getDate());
    const month = this.format(date.getMonth() + 1);
    const hour = this.format(date.getHours());
    const minutes = this.format(date.getMinutes());
    return `${day}.${month}.${date.getFullYear()} ${hour}:${minutes}`;
  }

  private format(toFormat: number): string {
    return ('0' + toFormat).slice(-2);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortener'
})
export class ShortenerPipe implements PipeTransform {

  private defaultLength: number = 140;

  transform(value: string, requestedLength?: number): string {
    const length: number = requestedLength || this.defaultLength;

    if (value.length <= length) {
      return value;
    }

    return value.substr(0, length - 3).trim() + '…';
  }

}

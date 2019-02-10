import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive } from '@angular/core';
import { NumberUtil } from '../util/number-util';

@Directive({
  selector: '[appValidPrice]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PriceValidatorDirective,
    multi: true,
  }],
})
export class PriceValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return !this.isValidPrice(control.value) ? { 'validPrice': true } : null;
  }

  private isValidPrice(price: number | string): boolean {
    let precision: number;

    try {
      precision = NumberUtil.getPrecision(price);
    } catch (e) {
      return false;
    }

    return !(precision > 2 || price <= 0);
  }

}

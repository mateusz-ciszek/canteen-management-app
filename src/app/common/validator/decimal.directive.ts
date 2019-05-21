import { Attribute, Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDecimal]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: DecimalDirective,
    multi: true,
  }],
})
export class DecimalDirective implements Validator {
  constructor(@Attribute('appDecimal') private decimalPlaces: number = 2) {}

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      if (this.isAboveDecimalPlaces(control.value)) {
        return { 'decimal': true };
      }
    }
  }

  private isAboveDecimalPlaces(value: number): boolean {
    const decimalPart: string | null = value.toString().split('.')[1];
    return decimalPart ? decimalPart.length > this.decimalPlaces : false;
  }
}

export class NumberUtil {

  /**
   * Method to calculate number of decimal places in given value.
   *
   * @throws {PrecisionError} Throws `PrecisionError` whenever passed value is `null`, `NaN` or is infinite
   * @param value - Input number from which it will calculate amount of decimal places
   * @return Number of decimal places in given input number
   */
  public static getPrecision(value: number | string): number {
    if (!value) {
      throw new PrecisionError('Value is null', 'IS_NULL');
    }

    const number = Number(value.toString());
    if (isNaN(number)) {
      throw new PrecisionError(`Value: ${value} is not a number`, 'IS_NAN');
    }

    if (!isFinite(number)) {
      throw new PrecisionError(`Value: ${value} is infinite`, 'IS_INFINITE');
    }

    let e: number = 1;
    let precision: number = 0;
    while (Math.round(number * e) / e !== value) {
      e *= 10;
      ++precision;
    }

    return precision;
  }

}

export class PrecisionError extends Error {
  constructor(message: string, public readonly errorCode: PrecisionErrorEnum) {
    super(message);
  }
}

export type PrecisionErrorEnum = 'IS_NULL' | 'IS_NAN' | 'IS_INFINITE';

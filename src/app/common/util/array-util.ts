export class ArrayUtil {
  public static flatMap<T, U>(array: U[], mapFunction: (currentValue: U, index: number, self: U[]) => T[], thisArg?: any): T[] {
    return array.map(mapFunction, thisArg).reduce((accumulated, currentValue) => accumulated.concat(currentValue), []);
  }
}

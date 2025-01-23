type Primitives = string | number | boolean | Date

export abstract class ValueObject<T extends Primitives> {
  readonly value: T

  public constructor(value: T) {
    this.isDefined(value)
    this.value = value
  }

  private isDefined(value: T): void {
    if (value === null || value === undefined) {
      console.log(typeof(value), 'No definido');
    }
  }

  protected abstract validate(): void;

  public get Value(): T {
    return this.value;
  }
}
import { ValueObject } from "../../../../core/base/ValueObject"

export class UserAge extends ValueObject<number> {
  protected validate(): void {
    if (this.value < 18) {
      throw new InvalidUserAgeError("UserAge must be at least 18 years old");
    }
  }
  
    public static fromNumber(age: number): UserAge {
      if (isNaN(age) || age <= 0) {
        throw new InvalidUserAgeError("UserAge must be a valid and positive number");
      }
      return new this(age);
    }
}
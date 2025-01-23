import { ValueObject } from "../../../../core/base/ValueObject";

export class UserName extends ValueObject<string> {
  protected validate(): void {
    if (this.value.length < 3) {
      throw new Error("UserName must be at least 3 characters long");
    }
  }
    public static fromString(name:string):UserName{
      return new this(name);
    }
  }
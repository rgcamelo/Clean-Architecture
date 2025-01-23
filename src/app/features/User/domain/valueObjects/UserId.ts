import { ValueObject } from "../../../../core/base/ValueObject";

export class UserId extends ValueObject<string> {  

  protected validate(): void {
    if (this.value.length < 5) {
      throw new InvalidUserIdError("UserId must be at least 5 characters long");
    }
  }

  public static fromString(id:string):UserId{
    if (!id || id.trim() === "") {
      throw new InvalidUserIdError("UserId cannot be an empty string");
    }
    return new this(id);
  }
}
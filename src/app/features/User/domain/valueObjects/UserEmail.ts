import { ValueObject } from "../../../../core/base/ValueObject";

export class UserEmail extends ValueObject<string> {
    protected validate(): void {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(this.value)) {
        throw new InvalidEmailError("UserEmail must be a valid email address");
      }
    }

    public static fromString(email:string):UserEmail{
      if (!email || email.trim() === "") {
        throw new InvalidEmailError("UserEmail cannot be an empty string");
      }
      return new this(email);
    }
}
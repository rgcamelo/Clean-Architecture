import { ValueObject } from "../../../../core/base/ValueObject";

export class UserCreatedAt extends ValueObject<Date> {
  protected validate(): void {
    if (this.value > new Date()) {
      throw new InvalidCreatedAtError("UserCreatedAt must be in the past");
    }
  }

  public static fromDate(createAt:Date):UserCreatedAt{
    if (isNaN(createAt.getTime())) {
      throw new InvalidCreatedAtError("UserCreatedAt must be a valid date");
    }
    return new this(createAt);
  }
  }
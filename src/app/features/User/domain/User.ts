import { UserAge } from "./valueObjects/UserAge";
import { UserCreatedAt } from "./valueObjects/UserCreatedAt";
import { UserEmail } from "./valueObjects/UserEmail";
import { UserId } from "./valueObjects/UserId";
import { UserName } from "./valueObjects/UserName";

export class User {
  id: UserId;
  name: UserName;
  email: UserEmail;
  createdAt: UserCreatedAt;
  age: UserAge;

  constructor(
    id: UserId,
    name: UserName,
    email: UserEmail,
    createdAt: UserCreatedAt,
    age: UserAge
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
    this.age = age;
  }

  public nameAndEmail() {
    return `${this.name.Value} - ${this.email.Value}`;
  }
}
import { Mapper } from "../../../../core/base/Mapper";
import { User } from "../../domain/User";
import { UserAge } from "../../domain/valueObjects/UserAge";
import { UserCreatedAt } from "../../domain/valueObjects/UserCreatedAt";
import { UserEmail } from "../../domain/valueObjects/UserEmail";
import { UserId } from "../../domain/valueObjects/UserId";
import { UserName } from "../../domain/valueObjects/UserName";
import { UserModelMock } from "../Model/user.model";

export class UserImplementationRepositoryMapper extends Mapper<User, UserModelMock> {
    mapFrom(param: User): UserModelMock {
        return {
            id: param.id.Value,
            name: param.name.Value,
            email: param.email.Value,
            createdAt: param.createdAt.Value,
            age: param.age.Value,
        };
    }
    mapTo(param: UserModelMock): User {
        const user = new User(
            UserId.fromString(param.id),
            UserName.fromString(param.name),
            UserEmail.fromString(param.email),
            UserCreatedAt.fromDate(param.createdAt),
            UserAge.fromNumber(param.age)
          );
          
        return user; 
    }
}

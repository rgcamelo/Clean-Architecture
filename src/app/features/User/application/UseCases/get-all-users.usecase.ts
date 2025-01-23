import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UseCase } from '../../../../core/base/use-case';
import { User } from '../../domain/User';
import { UserRepository } from '../Repository/UserRepository';
import { UserModelMock } from '../Model/user.model';
import { UserImplementationRepositoryMapper } from '../Mapper/UserMapper';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersUsecase implements UseCase<void,User[]> {

    private readonly mapper = new UserImplementationRepositoryMapper();


    constructor(private readonly userRepository: UserRepository<UserModelMock>) { }

    execute(params: void): Observable<User[]> {
        return this.userRepository.getAll()
        .pipe(map(users => users.map(user => this.mapper.mapTo(user))) 
        );
      }

}
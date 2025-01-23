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
export class GetUserById implements UseCase<string,User> {

  private readonly mapper = new UserImplementationRepositoryMapper();

  constructor(private readonly userRepository: UserRepository<UserModelMock>) { }

  execute(params:string): Observable<User> {
    return this.userRepository.getUserById(params).pipe(map(this.mapper.mapTo));
  }

}
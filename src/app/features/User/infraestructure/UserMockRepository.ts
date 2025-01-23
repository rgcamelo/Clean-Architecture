import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { UserRepository } from '../application/Repository/UserRepository';
import { UserModelMock } from '../application/Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserMockRepository extends UserRepository<UserModelMock> {

    user:UserModelMock = {
        id: '04',
        name: 'Lorena',
        email: 'lorena@gmail.com',
        createdAt: new Date(),
        age: 31
    }

    user2:UserModelMock = {
        id: '05',
        name: 'Armando',
        email: 'armando@gmail.com',
        createdAt: new Date(),
        age: 48
    }
 
  users:UserModelMock[] = [
    {
        id: '01',
        name: 'Rafael Camelo',
        email: 'rafaelgcamelo@gmail.com',
        createdAt: new Date(),
        age: 26
    },
    {
        id: '02',
        name: 'Mauricio Berlingheri',
        email: 'mberlingheri@gmail.com',
        createdAt: new Date(),
        age: 52
    },
    {
        id: '03',
        name: 'Ronnye Avila',
        email: 'ravila@gmail.com',
        createdAt: new Date(),
        age: 42
    }
  ];

  constructor() {
    super();
  }

//   getElephantById(id: number): Observable<ElephantModel> {
//     return from(this.elephants)
//       .pipe(filter((elephant: ElephantMockEntity) => elephant.id === id))
//       .pipe(map(this.mapper.mapFrom));
//   }

//   getAllElephants(): Observable<ElephantModel> {
//     return from(this.elephants)
//       .pipe(map(this.mapper.mapFrom));
//   }

    getAll(): Observable<UserModelMock[]> {
    return from([this.users]);
  }

   getUserById(id:string): Observable<UserModelMock> {
    return of(this.user);
  }
}
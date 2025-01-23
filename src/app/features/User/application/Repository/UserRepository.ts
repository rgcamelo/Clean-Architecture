import { Observable } from "rxjs";

export abstract class UserRepository<T> {
  abstract getAll(): Observable<T[]>;
  abstract getUserById(id:string): Observable<T>; 

  // create(user: User): Promise<void>;
  // getOneById(id: UserId): Promise<User | null>;
  // edit(user: User): Promise<void>;
  // delete(id: UserId): Promise<void>;
  
}
import { Injectable } from '@angular/core';
import { User } from 'src/interfaces/user';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user :User
  postUser$: Observable<any>;
  private postUserSubject = new Subject<any>();

  constructor() { 
    this.postUser$ = this.postUserSubject.asObservable();
  }


  postUser(userData:User){
    this.user= userData;
    this.postUserSubject.next(userData);
  }
}

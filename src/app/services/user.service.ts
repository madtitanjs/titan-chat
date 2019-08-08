import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/interfaces/user';
import { map, startWith } from 'rxjs/operators';
import { mockUserId } from 'src/configuration/constants';
import { MOCK_USERS } from 'src/mock/users';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<User[]> {
    return of(MOCK_USERS)
  }

  getCurrentUser() {
    var contacts = this.getContacts().pipe(startWith(), map(s => { return s.filter(s => s.id === mockUserId)[0] }))
    return contacts;
  }
}

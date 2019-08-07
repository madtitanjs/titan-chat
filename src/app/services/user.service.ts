import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/interfaces/user';
import { map, startWith } from 'rxjs/operators';
import { mockUserId } from 'src/configuration/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getContacts() {
    return this.httpClient.get<User[]>('./mock/users.json')
  }

  getCurrentUser() {
    var contacts = this.getContacts().pipe(startWith(), map(s => { return s.filter(s => s.id === mockUserId)[0] }))
    return contacts;
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-screen',
  templateUrl: './contact-screen.component.html',
  styleUrls: ['./contact-screen.component.scss']
})
export class ContactScreenComponent implements OnInit {

  contacts: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getContacts();
  }

  async getContacts() {
    this.contacts = await this.userService.getContacts().toPromise();
  }

}

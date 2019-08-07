import { Component, OnInit } from '@angular/core';
import { User } from 'src/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { mockUserId } from 'src/configuration/constants';

@Component({
  selector: 'app-contact-actions',
  templateUrl: './contact-actions.component.html',
  styleUrls: ['./contact-actions.component.scss']
})
export class ContactActionsComponent implements OnInit {
  userImg: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getContacts();
  }

  async getContacts() {
    var contacts = await this.userService.getContacts().toPromise();
    var user = contacts.find(s => s.id === mockUserId);
    console.log(user);
    if(typeof user != 'undefined') {
      this.userImg = user.img;
    }
  }

}

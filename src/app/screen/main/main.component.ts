import { Component, OnInit } from '@angular/core';
import { User } from 'src/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  contacts: User[] = [];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getContacts();
  }

  async getContacts() {
    this.contacts = await this.userService.getContacts().toPromise();
    if(this.contacts.length > 0) {
      // this.router.navigateByUrl(`/c/${this.contacts[0].id}`)
    }
  }

}

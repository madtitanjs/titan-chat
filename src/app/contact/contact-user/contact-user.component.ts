import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/interfaces/user';

@Component({
  selector: 'app-contact-user',
  templateUrl: './contact-user.component.html',
  styleUrls: ['./contact-user.component.scss']
})
export class ContactUserComponent implements OnInit {

  @Input() user: User;

  userImg = "";
  userName = "";
  userLatestMessage = "";
  userLatestMessageDate = Date.now()
  constructor() { }

  ngOnInit() {
    this.userImg = this.user.img;
    this.userName = this.user.name;
    this.userLatestMessage = "Lorem ipsum dolor sit amet, ridens comprehensam mei in. Eu cetero accumsan nec, cu suas viris verear his, dolorum contentiones pro in. Eum et alterum pertinax senserit, vis sententiae scribentur signiferumque eu. Sea tota assentior definiebas in, mea facer augue ea."
  }

}

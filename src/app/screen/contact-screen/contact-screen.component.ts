import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material';
import { SettingsDialogComponent } from 'src/app/dialogs/settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-contact-screen',
  templateUrl: './contact-screen.component.html',
  styleUrls: ['./contact-screen.component.scss']
})
export class ContactScreenComponent implements OnInit {

  @Input() contacts: User[];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openSettings() {
    this.dialog.open(SettingsDialogComponent, {
      width: '300px',
      height: '400px',
      autoFocus: false
    });
  }
}

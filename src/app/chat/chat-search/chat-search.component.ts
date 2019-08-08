import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/interfaces/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-chat-search',
  templateUrl: './chat-search.component.html',
  styleUrls: ['./chat-search.component.scss']
})
export class ChatSearchComponent implements OnInit {

  searchControl = new FormControl();
  contacts: User[] = [];
  filteredContacts: Observable<User[]>;
  selectedContacts: User[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  @ViewChild('contactInput', {static: false}) contactInput: ElementRef<HTMLInputElement>
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;
  
  constructor(private userService: UserService) { 
    this.getUsers();
  }

  async getUsers() {
    this.contacts = await this.userService.getContacts().toPromise();
    console.log(this.contacts);
  }

  ngOnInit() {
    this.setupControl();
  }

  setupControl() {
    this.filteredContacts = this.searchControl.valueChanges.pipe(
      startWith(null),
      map((value: any | null) => value ? this._filter(value) : this.contacts.slice() )
    );
  }

  add(event: MatChipInputEvent): void {
    if(!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if((value || '').trim()) {
        console.log(value.trim())
      }

      if(input) {
        input.value = '';
      }

      this.searchControl.setValue(null);
    }
  }

  remove(contact: User) {
    var idx = this.selectedContacts.findIndex(u => u.id === contact.id);
    if(idx != -1) this.selectedContacts.splice(idx, 1);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedContacts.push(event.option.value);
    this.contactInput.nativeElement.value = '';
    this.searchControl.setValue(null);
  }

  private _filter(value: any): User[] {
    var filterString = value;
    if(typeof value === 'object') filterString = value.name;
    const filterVal = filterString.toLowerCase();
    var contacts = this.contacts.filter(s => s.name.toLowerCase().indexOf(filterVal) === 0);
    return contacts;
  }

}

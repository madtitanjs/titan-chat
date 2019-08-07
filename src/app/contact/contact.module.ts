import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactActionsComponent } from './contact-actions/contact-actions.component';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactUserComponent } from './contact-user/contact-user.component';

@NgModule({
  declarations: [ContactActionsComponent, ContactUserComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [ContactActionsComponent, ContactUserComponent]
})
export class ContactModule { }

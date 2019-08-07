import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactActionsComponent } from './contact-actions/contact-actions.component';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactUserComponent } from './contact-user/contact-user.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContactActionsComponent, ContactUserComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    SharedModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [ContactActionsComponent, ContactUserComponent]
})
export class ContactModule { }

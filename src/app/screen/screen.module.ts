import { ChatModule } from './../chat/chat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenRoutingModule } from './screen-routing.module';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './main/main.component';
import { ContactScreenComponent } from './contact-screen/contact-screen.component';
import { ContactModule } from '../contact/contact.module';
import { MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';
import { NewChatScreenComponent } from './new-chat-screen/new-chat-screen.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DialogsModule } from '../dialogs/dialogs.module';

@NgModule({
  declarations: [ChatScreenComponent, MainComponent, ContactScreenComponent, NewChatScreenComponent, NotFoundComponent],
  imports: [
    ChatModule,
    CommonModule,
    DialogsModule,
    ScreenRoutingModule,
    FlexLayoutModule,
    ContactModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    ChatScreenComponent,
    ContactScreenComponent
  ]
})
export class ScreenModule { }

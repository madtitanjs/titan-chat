import { ChatModule } from './../chat/chat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenRoutingModule } from './screen-routing.module';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './main/main.component';
import { ContactScreenComponent } from './contact-screen/contact-screen.component';
import { ContactModule } from '../contact/contact.module';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [ChatScreenComponent, MainComponent, ContactScreenComponent],
  imports: [
    ChatModule,
    CommonModule,
    ScreenRoutingModule,
    FlexLayoutModule,
    ContactModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ChatScreenComponent,
    ContactScreenComponent
  ]
})
export class ScreenModule { }

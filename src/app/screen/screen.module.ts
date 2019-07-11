import { ChatModule } from './../chat/chat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenRoutingModule } from './screen-routing.module';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ChatScreenComponent],
  imports: [
    ChatModule,
    CommonModule,
    ScreenRoutingModule,
    FlexLayoutModule
  ]
})
export class ScreenModule { }

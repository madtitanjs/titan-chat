import { ChatDataService } from './../../chat/chat-data.service';
import { Component, OnInit } from '@angular/core';
import { mockChannel, mockUserId } from '../../../configuration/constants';
import { Observable, BehaviorSubject } from 'rxjs';
import { ChatMessage } from 'src/interfaces/chatmessage';
@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss']
})
export class ChatScreenComponent implements OnInit {
  // variables
  messages: ChatMessage[] = [];

  constructor(private chatData: ChatDataService) { }

  ngOnInit() {
    this.getChatData();
  }

  addChatBubble() {}
  removeChatBubble() {}

  getChatData() {
    this.chatData.getMessagesByChannelId(mockChannel).subscribe(val => {
      val.forEach(s => {
        s.self = s.sender_id === mockUserId;
      });
      this.messages.push(...val);
    });
  }

  sendChat(chat: ChatMessage) {
    this.messages.push(chat);
  }

}

import { ChatMessage } from 'src/interfaces/chatmessage';
import { EventEmitter, Component, OnInit, ViewChild, ElementRef, Output, HostListener, ViewContainerRef } from '@angular/core';
import { mockUserId, mockUserName, mockChannel, mockUserImg } from 'src/configuration/constants';

@Component({
  selector: 'app-chat-actions',
  templateUrl: './chat-actions.component.html',
  styleUrls: ['./chat-actions.component.scss']
})
export class ChatActionsComponent implements OnInit {

  @ViewChild('messageInput', { static: true }) messageInput: ElementRef;
  @Output() chatMessage = new EventEmitter<ChatMessage>();

  constructor() { }

  ngOnInit() {
    this.setupInput();
  }

  setupInput() {
    const textArea: HTMLTextAreaElement = this.messageInput.nativeElement;
    textArea.onkeydown = (ev: KeyboardEvent) => {
      if (ev.keyCode === 13 && !ev.shiftKey && !/^\s*$/.test(textArea.value)) {
        ev.preventDefault();
        this.emitMessage();
      }
    };
  }

  isValidText(value: string): boolean {
    return /^\s*$/.test(value)
  }

  emitMessage() {
    const textArea: HTMLTextAreaElement = this.messageInput.nativeElement;
    const message = textArea.value;
    if(/^\s*$/.test(message)) return;
    textArea.value = '';
    const chatMessage: ChatMessage = {
      message,
      sender_id: mockUserId,
      sender: mockUserName,
      channel: mockChannel,
      sender_img: mockUserImg,
      date: new Date().toISOString(),
      self: true
    };
    this.chatMessage.next(chatMessage);
  }


  resizeBy(elem) {
    console.log(elem);
  }

}

import { BehaviorSubject } from 'rxjs';
import { ChatMessage } from 'src/interfaces/chatmessage';
import { Component, OnInit, Input, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent implements OnInit {
  @Input() chatMessage: ChatMessage;
  private hostStyle: CSSStyleDeclaration;
  private chatBoxStyle: CSSStyleDeclaration;
  showImg = new BehaviorSubject<boolean>(false);

  @ViewChild('messageContent', {static: true}) messageContent: ElementRef;

  constructor(private viewRef: ViewContainerRef) {
    this.hostStyle = this.viewRef.element.nativeElement.style;
  }

  ngOnInit() {
    this.showImg.next(!this.chatMessage.self);
    this.chatBoxStyle = this.messageContent.nativeElement.style;
    const bubbleFlex = this.chatMessage.self ? 'flex-end' : 'flex-start';
    const bubbleBg = this.chatMessage.self ? 'var(--primaryColor)' : 'var(--backgroundColor)';
    const bubbleColor = this.chatMessage.self ? 'var(--bodyLight)' : 'var(--bodyDark)';
    this.hostStyle['place-self'] = bubbleFlex;
    this.hostStyle['justify-self'] = bubbleFlex;
    this.chatBoxStyle.background = bubbleBg;
    this.chatBoxStyle.color = bubbleColor;
    if (this.chatMessage.self)  {
      this.hostStyle.marginRight = 'var(--sideMargin)';
    } else {
      this.hostStyle.marginLeft = 'var(--sideMargin)';
    }
  }

}

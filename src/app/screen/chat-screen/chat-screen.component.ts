import { Component, OnInit } from '@angular/core';
import { mockChannel, mockUserId } from '../../../configuration/constants';
import { ChatMessage } from 'src/interfaces/chatmessage';
import { ActivatedRoute } from '@angular/router';
import { ChannelService } from 'src/app/services/channel.service';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss']
})
export class ChatScreenComponent implements OnInit {
  // variables
  messages: ChatMessage[] = [];
  channelTitle = "";
  channelStatus = "";
  constructor(
    private channelService: ChannelService,
    private messageService: MessageService, 
    private acr: ActivatedRoute) { }

  ngOnInit() {
    this.acr.params.subscribe(val => {
      this.messages.length = 0;
      this.getChatData(val.channel_id);
      this.updateChannel(val.channel_id);
    })
    
  }

  async updateChannel(channel_id: string) {
    var channel = await this.channelService.getChannelDetailsByChannelId(channel_id).toPromise();
    this.channelTitle = channel.channel_name;
    
    if(typeof channel.channel_active != 'undefined') {
      let ref = new Date();
      let comp = new Date(channel.channel_active);
      const diff = ref.getTime() - comp.getTime();
      let secDiff = (diff) / (1000);
      let minDiff = secDiff / 60;
      let hourDiff = minDiff / 60;
      if(hourDiff < 24) {

        if(hourDiff > 0) {
          this.channelStatus = `Active ${Math.floor(hourDiff)}h ago`
        } else if(minDiff > 0) {
          this.channelStatus = `Active ${Math.floor(minDiff)}m ago`
        } else {
          this.channelStatus = 'Active on Titan chat'
        }
      } else {
        ref.setHours(0,0,0,0);
        comp.setHours(0,0,0,0);
        let dayDiff = (diff) / (1000 * 60 * 60 * 24);
        this.channelStatus = `Active ${Math.floor(dayDiff)}d ago`
      }
      
    }
  }

  addChatBubble() {}
  removeChatBubble() {}

  getChatData(channelId: string) {
    this.messageService.getChatMessages(channelId).subscribe(val => {
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

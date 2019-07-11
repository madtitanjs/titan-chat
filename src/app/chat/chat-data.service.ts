import { ChatApiService } from './../api/chat-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatDataService {

  constructor(private chatApi: ChatApiService) { }

  getMessagesByChannelId(channelId: string) {
    return this.chatApi.getChatMessages(channelId);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatMessage } from 'src/interfaces/chatmessage';
import { filter, startWith, map } from 'rxjs/operators';
import { of, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatApiService {

  constructor(private httpClient: HttpClient) { }

  getChatMessages(channelId: string) {
    return this.httpClient.get<ChatMessage[]>('/mock/messages.json')
      .pipe(
        map(messages => messages.filter(m => m.channel === channelId))
      );
  }
}

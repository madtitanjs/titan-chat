import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatMessage } from 'src/interfaces/chatmessage';
import { map } from 'rxjs/operators';
import { MOCK_MESSAGES } from 'src/mock/messages';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getChatMessages(channelId: string): Observable<ChatMessage[]> {
    return of(MOCK_MESSAGES)
      .pipe(
        map((messages: ChatMessage[]) => messages.filter(m => m.channel === channelId))
      );
  }
}

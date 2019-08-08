import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Channel } from 'src/interfaces/channel';
import { map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { MOCK_CHANNELS } from 'src/mock/channels';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor() { }

  getChannelDetailsByChannelId(channelId: string): Observable<Channel> {
    return of(MOCK_CHANNELS).pipe(map(ch => ch.find(c => c.channel === channelId)));
  }
}

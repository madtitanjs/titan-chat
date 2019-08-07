import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Channel } from 'src/interfaces/channel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private httpClient: HttpClient) { }

  getChannelDetailsByChannelId(channelId: string) {
    return this.httpClient.get<Channel[]>('./mock/channels.json').pipe(map(ch => ch.find(c => c.channel === channelId)));
  }
}

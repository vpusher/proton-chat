import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Channel} from '../models/channel';

@Injectable()
export class ChannelService {

  private url = 'assets/data/channels.json';

  private byIdUrl = 'assets/data/channels/';

  private http: Http;

  private channels: Array<Channel>;

  constructor(http: Http) {
    this.http = http;
  }

  // Get all user
  all(): Promise<Channel[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as Channel[])
      .catch(this.handleError);
  }

  get(id: number): Promise<Channel> {
    return this.http.get(this.byIdUrl + id + '.json')
      .toPromise()
      .then(response => response.json() as Channel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

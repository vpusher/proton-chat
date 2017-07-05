import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {User} from '../models/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private url = 'assets/data/users.json';

  private http: Http;

  private users: Array<User>;

  private user: User;

  constructor(http: Http) {
    this.http = http;
    //this.user = window.user as User;
  }

  // Get all user
  all(): Promise<User[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  // Get current user
  current(): User {
    return this.user;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

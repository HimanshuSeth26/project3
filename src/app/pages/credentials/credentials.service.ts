import { Injectable } from '@angular/core';
import { HttpClient,  HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  url = environment.baseUrl + '/user1';


  constructor(private http: HttpClient) {
  }

  credit(user: User) {
    console.log("new employee"+user);
    return this.http.post<any>(this.url, user);
  }

}


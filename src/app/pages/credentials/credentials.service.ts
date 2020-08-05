import { Injectable } from '@angular/core';
import { HttpClient,  HttpClientModule } from '@angular/common/http';

import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  url = 'http://localhost:4002/user1';


  constructor(private http: HttpClient) {
  }

  credit(user: User) {
    console.log(user);
    return this.http.post<any>(this.url, user);
  }


  get(){
    return this.http.get<any>(this.url);
  }
  delete(userId)
  {
    return this.http.delete<any>(this.url+'/'+userId) ;
  }
  getElementById(userId)
  {
    return this.http.get<any>(this.url+'/'+userId) ;
  }

  edit(user1: User, userId) {
    return this.http.put<any>(this.url+'/'+userId,user1);
  }

}





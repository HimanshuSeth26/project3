import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../registration/user";


@Injectable({
  providedIn: 'root'
})
export class ViewregistrationService{
  url = 'http://localhost:4001/user';
  constructor(private http: HttpClient) { }

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
  edit(user: User,userId) {
    return this.http.put<any>(this.url+'/'+userId,user);
  }

}

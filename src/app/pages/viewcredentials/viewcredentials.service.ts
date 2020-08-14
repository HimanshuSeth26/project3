  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "./user";
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ViewcredentialsService{
  url = environment.baseUrl + '/user1';

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

  edit(user1: User, userId) {
    return this.http.put<any>(this.url+'/'+userId,user1);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "./user";



@Injectable({
  providedIn: 'root'
})
export class ProjectsService{
  url = 'http://localhost:4002/user1'
  url1= 'http://localhost:4002/employee';
  url2 = 'http://localhost:4002/state';
  constructor(private http: HttpClient) { }

  post(user: User) {
   console.log(user);
    return this.http.post<any>(this.url2,user)
  }

  get(){
    return this.http.get<any>(this.url);
  }
get1(){

  return this.http.get<any>(this.url1);
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "./user";



@Injectable({
  providedIn: 'root'
})
export class ProjectService{
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

  delete(user1Id)
  {
    return this.http.delete<any>(this.url2+'/'+user1Id) ;
  }

  getElementByTask(user1Id,task)
  {
    console.log("user1Id"+user1Id)
    return this.http.get<any>(this.url2+'/id/'+user1Id+'/'+task) ;
  }


  getElementById(userId)
  {
    console.log("user1Id"+userId)
    return this.http.get<any>(this.url2+'/'+userId) ;
  }


  edit(user1Id,user: User) {
    return this.http.put<any>(this.url2+'/'+user1Id,user);
  }






}

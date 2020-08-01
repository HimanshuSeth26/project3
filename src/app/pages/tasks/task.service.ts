import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "./user";


@Injectable({
  providedIn: 'root'
})
export class TaskService{
  url = 'http://localhost:4001/tasks';
  constructor(private http: HttpClient) { }
  enroll(user:User){
    return this.http.post<any>(this.url,user);
  }
  get(){
    return this.http.get<any>(this.url);
  }
  delete(userId)
  {
    return this.http.delete<any>(this.url+'/'+userId) ;
  }

  assignTo(userModel: User, id: any) {

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../employee/user";


@Injectable({
  providedIn: 'root'
})
export class TaskService{
  url = 'http://localhost:4001/user1';
  constructor(private http: HttpClient) { }

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

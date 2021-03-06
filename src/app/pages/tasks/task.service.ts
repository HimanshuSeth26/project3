import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "./user";
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TaskService{
    url = environment.baseUrl + '/tasks';
     emp = environment.baseUrl + '/user1';
  em='http://localhost:4002/api/user1'
  constructor(private http: HttpClient) { }

  enroll(user:User){
    return this.http.post<any>(this.url+'/newTask', user);
  }
  getEmp(){
    return this.http.get<any>(this.em);
  }

  delete(userId)
  {
    return this.http.delete<any>(this.url+'/'+userId) ;
  }

  assignTo(userModel: User, id: any) {

  }
  geti(){
    return this.http.get<any>(this.url);}



wrkgeti(obj){
  console.log(obj)
  return this.http.post<any>(this.url+'/task',obj);}

}

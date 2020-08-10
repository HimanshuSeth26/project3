import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "./user";


@Injectable({
  providedIn: 'root'
})
export class TaskService{
  url = 'http://localhost:4002/tasks';
  emp='http://localhost:4002/user1';
  wrk='http://localhost:4002/assign/task';
  constructor(private http: HttpClient) { }
  
  enroll(user:User){
    return this.http.post<any>(this.url+'/newTask',user);
  }
  getEmp(){
    return this.http.get<any>(this.emp);
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
  
  return this.http.post<any>(this.wrk,obj);}

}

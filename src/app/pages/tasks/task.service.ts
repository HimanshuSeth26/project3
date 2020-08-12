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
  ur = 'http://localhost:4002/api/tasks';
  constructor(private http: HttpClient) { }

  enroll(user:User){
    return this.http.post<any>(this.ur+'/newTask', user);
  }
  getEmp(){
    return this.http.get<any>(this.em);
  }

  delete(userId)
  {
    return this.http.delete<any>(this.ur+'/'+userId) ;
  }

  assignTo(userModel: User, id: any) {

  }
  geti(){
    return this.http.get<any>(this.ur);}



wrkgeti(obj){

  return this.http.post<any>(this.ur,obj);}

}

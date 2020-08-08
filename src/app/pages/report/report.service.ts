import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {User} from "./user";



@Injectable({
  providedIn: 'root'
})
export class ReportService {obj={}
  url = 'http://localhost:4002/user1/graph/result';
  emp='http://localhost:4002/user1';
  tsks='http://localhost:4002/assign/task';
  tsk="http://localhost:4002/tasks";

  constructor(private http: HttpClient) {
  }
  tList(userId){
        return this.http.get<any>(this.tsks+'/'+userId);}
  oWnt(userId,user:User){
//    return this.http.post<any>(this.th,user);
console.log(userId)
console.log(user)
    return this.http.put<any>(this.tsks+'/'+userId,user);
  }

  task(taskid,userId){
    let params=new HttpParams().set('empId',userId)
    console.log(params)
    return this.http.get<any>(this.tsk+'/'+taskid,{params});
  }

  geti(){
    return this.http.get<any>(this.emp);}


   get() {
     return this.http.get<any>(this.url);
   }

}

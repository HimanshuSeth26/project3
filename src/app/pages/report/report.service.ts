import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {User} from "./user";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {obj={}

  url = environment.baseUrl + '/tasks/asp';
  emp = environment.baseUrl + '/user1';
  tsk = environment.baseUrl + '/tasks';

  constructor(private http: HttpClient) {
  }
  tList(userId){
        return this.http.get<any>(this.tsk + '/task/' + userId);
  }
  oWnt(obj){
//    return this.http.post<any>(this.th,user);
// let params=new HttpParams().set('empId',userId)
// console.log("user"+userId)
    console.log(obj)
    return this.http.post<any>(this.tsk + '/selfAssign', obj);
  }

  task(taskid, userId){
    let params =new HttpParams().set('empId', userId)
    console.log(params)
    return this.http.get<any>(this.tsk + '/' +taskid, {params});
  }
  pause(taskid, userId){
    let params =new HttpParams().set('empId', userId)
    console.log(params)
    return this.http.put<any>(this.tsk + '/' +taskid, {params});
  }

  geti(){
    return this.http.get<any>(this.emp);
  }

   get(empId,body) {
     console.log("empId"+empId)
     let params =new HttpParams().set('isDisplay', body)
     return this.http.get<any>(this.url+empId,{params});
   }
}

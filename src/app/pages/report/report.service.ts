import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ReportService {
  url = 'http://localhost:4002/user1/graph/result';
  emp='http://localhost:4002/user1';
  tsks='http://localhost:4002/assign/task';
  tsk="http://localhost:4002/tasks";

  constructor(private http: HttpClient) {
  }
  tList(userId){
        return this.http.get<any>(this.tsks+'/'+userId);}

  task(taskid){
    console.log(taskid)
    return this.http.get<any>(this.tsk+'/'+taskid);
  }

  geti(){
    return this.http.get<any>(this.emp);}


   get() {
     return this.http.get<any>(this.url);
   }

}

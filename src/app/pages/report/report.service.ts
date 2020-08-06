import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ReportService {
  url = 'http://localhost:4002/user1/graph/result';
  emp='http://localhost:4002/user1';
  tsks='http://localhost:4002/assign/task';

  constructor(private http: HttpClient) {
  }
  tList(userId){
        return this.http.get<any>(this.tsks+'/'+userId);}



  geti(){
    return this.http.get<any>(this.emp);}


   get() {
     return this.http.get<any>(this.url);
   }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProjectsService{
  url = 'http://localhost:4002/user1';
  url1 = 'http://localhost:4002/employee';
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<any>(this.url);
  }
get1(){

  return this.http.get<any>(this.url1);
}

}

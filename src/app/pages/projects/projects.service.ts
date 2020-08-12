import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "./user";
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProjectsService{

  url = environment.baseUrl + '/user1';
  url1 = environment.baseUrl + '/employee';

  constructor(private http: HttpClient) { }
  enroll(user:User){
    return this.http.post<any>(this.url1,user)
  }

  get(){
    return this.http.get<any>(this.url);
  }
get1(){
  return this.http.get<any>(this.url1);
}

}

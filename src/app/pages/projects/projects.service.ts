import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "./user";


@Injectable({
  providedIn: 'root'
})
export class ProjectsService{
  url = 'http://localhost:4001/user1';
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<any>(this.url);
  }


}

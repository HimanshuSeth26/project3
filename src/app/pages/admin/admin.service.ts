import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AdminService{
  url1 = environment.baseUrl + '/tasks';

  constructor(private http: HttpClient) { }


  // get(){
  //   return this.http.get<any>(this.url);
  // }
  geti(){
    return this.http.get<any>(this.url1+'/taskOngoing');
  }

}

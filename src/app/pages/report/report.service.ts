import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ReportService {
  url = 'http://localhost:4001/user1/graph/result';

  constructor(private http: HttpClient) {
  }
  get() {
    return this.http.get<any>(this.url);
  }

}

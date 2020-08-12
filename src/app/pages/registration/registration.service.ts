import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";

import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url = environment.baseUrl + '/user';

  constructor(private http: HttpClient) {
  }

  register(user: User) {
    return this.http.post<any>(this.url, user);
  }

}


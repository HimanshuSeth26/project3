import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url = 'http://localhost:4001/user';

  constructor(private http: HttpClient) {
  }

  register(user: User) {
    return this.http.post<any>(this.url, user);
  }

}


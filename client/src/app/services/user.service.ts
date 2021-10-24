import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  domain_url = '';
  api_Url = `${this.domain_url}/api/user`;
  constructor(private http: HttpClient) { }
  login(user, pass) {
    return this.http.post(`${this.api_Url}`, { username: user, password: pass }).pipe(
      map(res  => {
        return res["data"] as string;
      })
    );
  }
}

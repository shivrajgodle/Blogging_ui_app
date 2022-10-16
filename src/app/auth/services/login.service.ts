import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponce } from '../model/auth-responce.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }

  authenticated(userName:string , password:string){

    const url = environment.url + environment.loginUrl;
    const req = {'username':userName,'password':password};
    return this.http.post<AuthResponce>(url,req);
  }

}

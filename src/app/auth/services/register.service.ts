import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResponse } from 'src/app/sharedmodules/model/responce.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }

  register(registerDetails:any){
    const url = environment.url  + environment.registerUserUrl;

    const req = {
      "name":registerDetails.username,
      "password":registerDetails.password,
      "email":registerDetails.email,
      "about":registerDetails.about
    };

    console.log("Req ={}",req);

    return this.http.post<HttpResponse>(url,req);    
  }


}

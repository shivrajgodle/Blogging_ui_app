import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpResponse } from 'src/app/sharedmodules/model/responce.model';
import { environment } from 'src/environments/environment';
import { categories } from '../model/categories';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient, private cookieService:CookieService) { }


  fetchAllCategories(){
    const url = environment.url + environment.categoryUrl;
    // const httpOption ={
    //   headers:new HttpHeaders({
    //     'content-Type':'application/json',
    //   'Authorization':this.cookieService.get('customtoken')
    //   })
    // };
    return this.http.get<categories>(url);
  }

  postBlog(data:any){

    let catId = data.category.categoryId;

    let userid =  JSON.parse(this.cookieService.get("customtoken")).user.id;

    let token =  JSON.parse(this.cookieService.get("customtoken")).token;

   const blogUrl = `/api/user/${userid}/category/${catId}/posts`

    const url = environment.url + blogUrl
    const req = {'title':data.title,'content':data.content,'categoryTitle':data.category.categoryTitle};

    const httpOption ={
      headers:new HttpHeaders({
      'Authorization':'Bearer ' + token
      })
    };

    return this.http.post<categories>(url,req,httpOption);
  }

}

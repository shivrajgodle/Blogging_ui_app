import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items!: MenuItem[];

  data!: string;

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {

    //console.log(JSON.parse(this.cookieService.get('customtoken')).user);
    
   this.data =  JSON.parse(this.cookieService.get("customtoken")).user.name;

   console.log("asasas",this.data);
   

    
    this.items = [
      {
     label:'Home',
     icon:'pi pi-home'
 },
 {
   label:'Create new Post',
   icon:'pi pi-telegram',
   routerLink:'/blog/post',
 },
 
];


  }

  logout(){
    this.cookieService.deleteAll();
    this.router.navigate(['/'])

  }

}

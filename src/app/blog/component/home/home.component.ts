import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {

    
    this.items = [
      {
     label:'Home',
     icon:'pi pi-home'
 },
 {
   label:'login',
   icon:'pi pi-sign-in',
   routerLink:'/auth/login'
 },
 {
   label:'register',
   icon:'pi pi-user-plus',
   routerLink:'/auth/signup'
 }
];


  }

}

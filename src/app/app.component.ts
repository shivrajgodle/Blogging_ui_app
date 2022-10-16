import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'Blogging_Ui_App';

  items!: MenuItem[];

  ngOnInit(){

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

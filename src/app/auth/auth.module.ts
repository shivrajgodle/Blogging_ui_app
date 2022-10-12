import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { SharedmodulesModule } from '../sharedmodules/sharedmodules.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedmodulesModule,
    RouterModule.forChild([
      {
        path:"",
        component:LoginComponent
      }
    ])
  ]
})
export class AuthModule { }

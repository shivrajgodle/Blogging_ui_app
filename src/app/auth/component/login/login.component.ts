import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthResponce } from '../../model/auth-responce.model';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  loader: boolean = false;

  constructor(private router:Router, private loginService:LoginService,private _snackBar: MatSnackBar, private cookieService:CookieService) { 

    this.login = new FormGroup({
      username:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required)
    });
  }

  ngOnInit(): void {
    this.cookieService.deleteAll('/');
  }

  onLogin(){
    this.authenticate(this.login.value.username, this.login.value.password)
  }

  private authenticate(userName:string , password:string){
    this.loader = true;
    let authresponce : any
    this.loginService.authenticated(userName,password).subscribe((responce:any)=>{
      authresponce = responce     
      
    },
    (error)=>{
      debugger;
      console.log("Authentication error",error);
      this.loader = false;
      this._snackBar.open(error.error.message, "Error", { duration: 2000, panelClass: ["error"], })
      
    },
    ()=>{
      console.log("AuthResponce:",authresponce);
      setTimeout(() => {
        this.loader = false;
        if(authresponce){
          this.cookieService.set('customtoken',JSON.stringify(authresponce),1,'/');
          
          this._snackBar.open("Authenticated", "Success", { duration: 2000, panelClass: ["success"], });
          this.router.navigate(['/blog/home']);
        }
        else{
          this._snackBar.open("Please enter valid username and password", "Error", { duration: 2000, panelClass: ["error"], })
        }
      }, 1000);
      
    }
    )

  }

  onCreate(){
    this.router.navigate(['/auth/signup'])
  }

  
}

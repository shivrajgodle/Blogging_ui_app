import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpResponse } from 'src/app/sharedmodules/model/responce.model';
import { RegisterService } from '../../services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;
  loader: boolean = false;
  constructor(private router:Router , private reg_service:RegisterService, private _snackBar: MatSnackBar) { 

    this.register = new FormGroup({
      username:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
      about:new FormControl("",Validators.required),
    });
  }

  ngOnInit(): void {
  }

  onRegister(){

    if (!this.register.valid) {
      this._snackBar.open("Please enter valid data for account creation!", "Error", { duration: 2000 })
  } else {

    let httpResponse: HttpResponse; 
    this.loader = true;
    //console.log("values are:-",this.register.value);
    this.reg_service.register(this.register.value).subscribe((responce:HttpResponse)=>{
          httpResponse = responce      
          
    },
    (error:HttpErrorResponse)=>{
      this._snackBar.open(error.error.message, "Error", { duration: 2000, panelClass: ["error"], })
      this.loader = true;
    }, 
    ()=>{
      console.log("responce:",httpResponse);
      setTimeout(() => {
        this.loader = false;
        if(httpResponse){
          this.router.navigate(['/auth/login']);
          this._snackBar.open("Account Created successfully!","Success",{duration:2000});
        }
        else{
          this._snackBar.open("Account cannot be created !", "Error", { duration: 2000 })
        }
      }, 1000);
      
    }
    )
  }
}

reset(){
  this.register.reset()
}

}

import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private router : Router,
    private loginService: LoginService){}

  // object: class = new class(); 
  login: Login = new Login("","");

  ngOnInit(): void {
    localStorage.setItem("isLoggedIn","False");
  }

  alert: string= "success";

  log(){
    this.loginService.login(this.login).subscribe((data:any)=>{
      if(data[0].count==1){
        localStorage.setItem("isLoggedIn","True");
        this.router.navigate(['/search']);
      }
      else{
        this.alert = "danger";
      }
    }) 
  }
}

// ng g c login: This command will generate a login component in the login folder.
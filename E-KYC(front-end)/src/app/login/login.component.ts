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

  login: Login = new Login("","");

  ngOnInit(): void {
    localStorage.setItem("isLoggedIn","False");
  }

  log(){
    this.loginService.login(this.login).subscribe((data:any)=>{
      console.log(data[0].count)
      if(data[0].count==1){
        localStorage.setItem("isLoggedIn","True");
        this.router.navigate(['/search']);
      }
      else{
        window.alert("Not A Registered User!")
      }
    })
    
  }
  
}
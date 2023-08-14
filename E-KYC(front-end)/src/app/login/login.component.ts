import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any[] = [];

  constructor(private router : Router,
    private loginService: LoginService){}

  login: Login = new Login("","");

  ngOnInit(): void {
    
    this.loginService.getData().subscribe((responeData)=>{
      this.data = responeData;
    },
    (error)=>{
      console.error("Error fetching data: ",error);
    }
    );
  }

  log(){
    // console.log(this.login);
    // this.loginService.login(this.login).subscribe((data:any)=>{
    //   console.log(data);
    // })
    console.log(this.data[0].password);
    this.router.navigate(['/search']);
    
  }
  
}

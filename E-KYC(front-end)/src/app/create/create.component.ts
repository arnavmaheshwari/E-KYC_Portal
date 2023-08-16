import { kycDocument } from './../kycDocument';
import { Component, OnInit } from '@angular/core';
import { Create } from '../create';
import { Router } from '@angular/router';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {
  // ngOnInit () {  }

  create: Create = new Create("","","","","","","","","","","","","","","","","","","","","","","","","","",[],"");

  kycDocument1: kycDocument = new kycDocument("IDENTITY_PROOF","","","","","");
  kycDocument2: kycDocument = new kycDocument("ADDRESS_PROOF","","","","","");
  kycDocument3: kycDocument = new kycDocument("OTHERS","","","","","");

  constructor(private router : Router,
    private createService: CreateService){}

  possible: string = "";
  lengthOfCode: number = 0;

  new() {
    this.create.kycDocument.push(this.kycDocument1);
    this.create.kycDocument.push(this.kycDocument2);
    this.create.kycDocument.push(this.kycDocument3);
    this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    this.lengthOfCode = 14;
    let text = "";
    for (let i = 0; i < this.lengthOfCode; i++) {
      text += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }
    this.create.ITGI_UniqueIdentifier=text;
    console.log(this.create);
    this.createService.create(this.create).subscribe((data:any)=>{
      console.log(data);
    })
  }

  goToSearch() {
    this.router.navigate(['/search']);
  }
  Logout() {
    localStorage.setItem("isLoggedIn","False");
    this.router.navigate(['']);
  }

  getFileDetails1(event:any) {
      this.kycDocument1.fileName = event.target.files[0].name;
      this.kycDocument1.fileExtension = event.target.files[0].type;
      const reader = new FileReader();
      const file :File = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {this.kycDocument1.fileBase64 = reader.result;}
  }
  getFileDetails2(event:any) {
      this.kycDocument2.fileName = event.target.files[0].name;
      this.kycDocument2.fileExtension = event.target.files[0].type;
      const reader = new FileReader();
      const file :File = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {this.kycDocument2.fileBase64 = reader.result;}
  }
  getFileDetails3(event:any) {
      this.kycDocument3.fileName = event.target.files[0].name;
      this.kycDocument3.fileExtension = event.target.files[0].type;
      const reader = new FileReader();
      const file :File = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {this.kycDocument3.fileBase64 = reader.result;}
  }
}
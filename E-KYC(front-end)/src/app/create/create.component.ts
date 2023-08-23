import { SearchService } from './../search.service';
import { DocumentsService } from './../documents.service';
import { kycDocument } from './../kycDocument';
import { Component } from '@angular/core';
import { Create } from '../create';
import { Router } from '@angular/router';
import { CreateService } from '../create.service';
import { Result } from '../result';
import { Search } from '../search';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {

  create: Create = new Create("","","","","","","","","","","","","","","","","","","","","","","","","","",[],"");
  result: Result = new Result("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  search: Search = new Search("","","","","","","","");

  kycDocument1: kycDocument = new kycDocument("IDENTITY_PROOF","","","","","");
  kycDocument2: kycDocument = new kycDocument("ADDRESS_PROOF","","","","","");
  kycDocument3: kycDocument = new kycDocument("OTHERS","","","","","");

  constructor(private router : Router,
    private createService: CreateService,
    private documentService: DocumentsService,
    private searchService: SearchService){}

  possible: string = "";
  lengthOfCode: number = 0;
  display: string = "Failure";
  alert: string = "success";

  new() {
    this.create.kycDocument.push(this.kycDocument1);
    this.create.kycDocument.push(this.kycDocument2);
    this.create.kycDocument.push(this.kycDocument3);

    this.search.clientType=this.create.clientType;
    this.search.firstName=this.create.firstName;
    this.search.middleName=this.create.middleName;
    this.search.lastName=this.create.lastName;
    this.search.gender=this.create.gender;
    this.search.dateofBirth=this.create.dateofBirth;
    this.search.idType=this.kycDocument1.idName;
    this.search.idNumber=this.kycDocument1.idNumber;

    this.searchService.search(this.search).subscribe((data:any)=>{
      if(data.status==200){
        this.display = "success"
        this.result.clientType=data.resu[0].client_type;
        this.result.prefix=data.resu[0].prefix;
        this.result.firstName=data.resu[0].first_name;
        this.result.middleName=data.resu[0].middle_name;
        this.result.lastName=data.resu[0].last_name;
        this.result.gender=data.resu[0].gender;
        this.result.dateofBirth=data.resu[0].date_of_birth;
        this.result.relatedPersonPrefix=data.resu[0].related_person_prefix;
        this.result.relatedPersonFirstName=data.resu[0].related_person_first_name;
        this.result.relatedPersonMiddleName=data.resu[0].related_person_middle_name;
        this.result.relatedPersonLastName=data.resu[0].related_person_last_name;
        this.result.relationshipType=data.resu[0].relationship_type;
        this.result.mobileNumber=data.resu[0].mobile_number;
        this.result.emailAddress=data.resu[0].email_address;
        this.result.addressLine1=data.resu[0].address_line_1;
        this.result.city=data.resu[0].city;
        this.result.district=data.resu[0].district;
        this.result.state=data.resu[0].state;
        this.result.country=data.resu[0].country;
        this.result.pinCode=data.resu[0].pin_code;
        this.result.correspondenceAddressLine1=data.resu[0].correspondence_address_line_1;
        this.result.correspondenceCity=data.resu[0].correspondence_city;
        this.result.correspondenceDistrict=data.resu[0].correspondence_district;
        this.result.correspondenceState=data.resu[0].correspondence_state;
        this.result.correspondenceCountry=data.resu[0].correspondence_country;
        this.result.correspondencePinCode=data.resu[0].correspondence_pin_code;
        this.result.idType=data.resu[0].id_type;
        this.result.idName=data.resu[0].id_name;
        this.result.idNumber=data.resu[0].id_number;
        this.result.ITGI_UniqueIdentifier=data.resu[0].itgi_unique_identifier;
      }
      else{
        this.createService.create(this.create).subscribe((data:any)=>{
          if(data.status==200){
            this.documentService.documents(this.create.kycDocument).subscribe((data:any)=>{
              if(data.status==200){
                this.display="created"
                window.alert("Data Inserted Successfully! ITGI Unique Reference ID Generated: "+ data.resu[0].itgi_unique_identifier)
                }
            else{
              this.alert = "danger";
              }
              })
            }
        else{
          this.alert = "danger";
      }
      })
      }
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
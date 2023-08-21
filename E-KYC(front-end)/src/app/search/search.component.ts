import { Component } from '@angular/core';
import { Search } from '../search';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { Result } from '../result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  search: Search = new Search("","","","","","","","");
  result: Result = new Result("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");

  constructor(private router : Router,
    private searchService: SearchService){}
    
    display: string = "";

  fetch() {
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
        window.alert("Not A Registered User!")
      }
    })
  }

  goToCreate() {
    this.router.navigate(['/create']);
  }
  Logout() {
    localStorage.setItem("isLoggedIn","False");
    this.router.navigate(['']);
  }
}
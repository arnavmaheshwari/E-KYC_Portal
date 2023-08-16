import { Component } from '@angular/core';
import { Search } from '../search';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search: Search = new Search("","","","","","","","");

  constructor(private router : Router,
    private searchService: SearchService){}

  fetch() {
    console.log(this.search);
    this.searchService.search(this.search).subscribe((data:any)=>{
      // console.log(data);
      if(data.status===200){
        window.alert(data)
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

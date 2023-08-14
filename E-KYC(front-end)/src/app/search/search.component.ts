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
      console.log(data);
    })
  }

  goToCreate() {
    this.router.navigate(['/create']);
  }
  goToLogin() {
    this.router.navigate(['']);
  }
}

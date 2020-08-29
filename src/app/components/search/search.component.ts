import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  searchFilter(query: string){
    this.router.navigateByUrl(`/search/${query}`).then( (e) => {
        if (e) {
          console.log("Navigation was successful! " + this.router);
        }else {
          console.log("Navigation has failed!");
        }
      });
    }
}

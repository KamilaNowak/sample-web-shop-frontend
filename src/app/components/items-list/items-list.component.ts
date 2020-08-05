import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service'
import { Item } from 'src/app/utils/item';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { query } from '@angular/animations';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component-content.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: Item[];
  categoryId:number;
  isSearchingActive: boolean
  private
  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
    this.getItemsList();
  });
}
  getItemsList() {

    this.isSearchingActive = this.route.snapshot.paramMap.has('query')
    
    const query:string = this.route.snapshot.paramMap.get('query')

    if(this.isSearchingActive){
      this.getSearchedItemsList()
    }
    else{
      this.retrieveItemsList()
    }
  }

  retrieveItemsList(){

    const categoryIdValue : boolean = this.route.snapshot.paramMap.has('id')

    if(categoryIdValue) {
      this.categoryId = +this.route.snapshot.paramMap.get('id');
    }
    else {
      this.categoryId = 1;
    }
    this.itemService
        .getItemList(this.categoryId)
        .subscribe(response => {
            this.items = response
        })
  }
  getSearchedItemsList(){
    
    const query:string = this.route.snapshot.paramMap.get('query')
    this.itemService.searchItems(query)
      .subscribe( data => this.items=data)
  }
}

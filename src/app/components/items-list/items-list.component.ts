import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service'
import { Item } from 'src/app/utils/item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component-content.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: Item[];
  categoryId: number = 1;
  prevCategoryId: number = 1;
  isSearchingActive: boolean
  prevSearchQuery: string = null;

  /* pagination */
  pageNumber: number = 1;
  pageSize: number = 10;
  totalElements: number = 0;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getItemsList();
    });
  }
  // routerOnActivate(): void{
  //   this.route.paramMap.subscribe(() =>{
  //     this.getItemsList();
  //   });
  // } 
  getItemsList() {

    this.isSearchingActive = this.route.snapshot.paramMap.has('query')

    const query: string = this.route.snapshot.paramMap.get('query')

    if (this.isSearchingActive) {
      this.getSearchedItemsList()
    }
    else {
      this.retrieveItemsList()
    }
  }

  retrieveItemsList() {
    const categoryIdValue: boolean = this.route.snapshot.paramMap.has('id')

    if (categoryIdValue) {
      this.categoryId = +this.route.snapshot.paramMap.get('id');
    }
    else {
      this.categoryId = 1;
    }

    if (this.prevCategoryId != this.categoryId) {
      this.pageNumber = 1;
    }

    this.itemService.getItemsWithPagination(this.categoryId, (this.pageNumber - 1), this.pageSize)
      .subscribe(this.retrieveItemsListResponseWithPagiantion())
  }
 
  getSearchedItemsList() {
    const query: string = this.route.snapshot.paramMap.get('query')

    if (this.prevSearchQuery != query) {
      this.pageNumber = 1;
    }
    this.prevSearchQuery = query
    this.itemService.searchItemsWithPagination(query, this.pageNumber - 1, this.pageSize)
      .subscribe(this.retrieveItemsListResponseWithPagiantion())
    // this.itemService.searchItems(query)
    //   .subscribe(data => this.items = data)
  }
  
  retrieveItemsListResponseWithPagiantion() {
    return response => {
      this.items = response._embedded.items;
      this.totalElements = response.page.totalElements;
      this.pageNumber = response.page.pageNumber + 1;
      this.pageSize = response.page.pageSize;
    }
  }
  setPageSize(size: number) {
    this.pageNumber = 1
    this.pageSize = size;
    this.getItemsList();
  }
}

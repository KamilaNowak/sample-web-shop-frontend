import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../utils/item'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ItemCategory } from '../utils/item-category';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url = 'http://localhost:8080/items'

  constructor(private httpClient: HttpClient) {

   }

  getItemList(categoryId: number): Observable<Item[]>{

     const filterUrl = this.url + `/search/findByItemCategory_Id?id=${categoryId}`
     return this.processItemsList(filterUrl)
  }

  getItemById(itemId:number):Observable<Item>{
    
  
    const itemUrl = this.url + `/search/findById?id=${itemId}`
    return this.httpClient.get<Item>(itemUrl)
  }

  searchItems(query: string): Observable<Item[]> {

    const searchUrl = this.url + `/search/findByTitleContaining?query=${query}`
    return this.processItemsList(searchUrl)
  }

  processItemsList(url: string): Observable<Item[]>{
    return this.httpClient
      .get<UnwrapEmbeddedItem>(url)
      .pipe( map (res => res._embedded.items)
      );
  }

  getItemCategoryList():Observable<ItemCategory[]>{
    const categoryUrl = `http://localhost:8080/item-category`
    
    console.log("d " + this.httpClient
      .get<UnwrapEmbeddedCategory>(categoryUrl)
      .pipe( map( res => res._embedded.itemCategory)))
    return this.httpClient
      .get<UnwrapEmbeddedCategory>(categoryUrl)
      .pipe( map( res => res._embedded.itemCategory))
  
  }

}
interface UnwrapEmbeddedItem{
  _embedded: {
    items: Item[];
  }
}
interface UnwrapEmbeddedCategory{
  _embedded: {
    itemCategory: ItemCategory[];
  }
}


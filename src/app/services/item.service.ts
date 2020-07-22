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

     const filterUrl = this.url+`/search/findByItemCategory_Id?id=${categoryId}`

     return this.httpClient
      .get<UnwrapEmbeddedItem>(filterUrl)
      .pipe( map( res => res._embedded.items)
    );
  }


  getItemCategoryList(){
    const categoryUrl =`http://localhost:8080/item-category`

    return this.httpClient
    .get<UnwrapEmbeddedCategory>(categoryUrl)
    .pipe( map( res => res._embedded.categories))
  }
}
interface UnwrapEmbeddedItem{
  _embedded: {
    items: Item[];
  }
}
interface UnwrapEmbeddedCategory{
  _embedded: {
    categories: ItemCategory[];
  }
}


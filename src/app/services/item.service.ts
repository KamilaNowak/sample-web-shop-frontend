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

  constructor(private httpClient: HttpClient) {}

  getItemList(categoryId: number): Observable<Item[]> {

    const filterUrl = this.url + `/search/findByItemCategory_Id?id=${categoryId}`
    return this.processItemsList(filterUrl)
  }

  getItemById(itemId: number): Observable<Item> {

    const itemUrl = this.url + `/` + itemId
    console.log(JSON.stringify(this.httpClient.get<Item>(itemUrl)))

    return this.httpClient.get<Item>(itemUrl);
  }

  searchItems(query: string): Observable<Item[]> {

    const searchUrl = this.url + `/search/findByTitleContaining?query=${query}`
    return this.processItemsList(searchUrl)
  }
  searchItemsWithPagination(query: string, page: number, size: number): Observable<UnwrapEmbeddedItem> {
    const searchUrl = this.url + `/search/findByTitleContaining?query=${query}`
      + `&page=${page}` + `&size=${size}`
    return this.httpClient.get<UnwrapEmbeddedItem>(searchUrl)
  }

  processItemsList(url: string): Observable<Item[]> {
    return this.httpClient
      .get<UnwrapEmbeddedItem>(url)
      .pipe(map(res => res._embedded.items)
      );
  }

  getItemCategoryList(): Observable<ItemCategory[]> {
    const categoryUrl = `http://localhost:8080/item-category`

    return this.httpClient
      .get<UnwrapEmbeddedCategory>(categoryUrl)
      .pipe(map(res => res._embedded.itemCategory))
  }

  getItemsWithPagination(categoryId: number, page: number, size: number): Observable<UnwrapEmbeddedItem> {
    const paginationUrl = `${this.url}/search/findByItemCategory_Id?id=` + `${categoryId}`
      + `&page=${page}` + `&size=${size}`
    return this.httpClient.get<UnwrapEmbeddedItem>(paginationUrl)
  }
}
interface UnwrapEmbeddedItem {
  _embedded: {
    items: Item[];
  },
  page: {
    size: number;
    totalElements: number,
    totalPages: number,
    number: number
  }
}
interface UnwrapEmbeddedCategory {
  _embedded: {
    itemCategory: ItemCategory[];
  }
}


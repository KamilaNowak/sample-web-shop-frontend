import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../utils/item'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url = 'http://localhost:8080/items'

  constructor(private httpClient: HttpClient) {

   }

  getItems(categoryId: number): Observable<Item[]>{
     return this.httpClient
      .get<UnwrapEmbedded>(this.url)
      .pipe( map( res => res._embedded.items)
    );
  }
}
interface UnwrapEmbedded{
  _embedded: {
    items: Item[];
  }
}
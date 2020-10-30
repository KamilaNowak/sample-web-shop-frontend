import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Item } from '../utils/item'

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private url = 'http://localhost:8080/purchases'

  constructor(private httpClient: HttpClient) {

  }

  postPurchase(item: Item) : Observable<any> {
    const headers = {
      'content-type': 'application/json'
    }
    return this.httpClient.post(this.url, item, { 'headers': headers })
  }
}

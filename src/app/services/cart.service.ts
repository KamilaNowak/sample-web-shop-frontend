import { Injectable } from '@angular/core';
import { CartItem } from "../utils/CartItem"
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemsList: CartItem[] = [];
  total: Subject<number> = new Subject<number>();
  quantity: Subject<number> = new Subject<number>();

  constructor() { }

  addItem(cartItem: CartItem) {

    let isItemExisting: boolean = false;
    let existingItem: CartItem = undefined;

    if (this.cartItemsList.length > 0) {
      this.cartItemsList.find( temp =>{
        temp.id === cartItem.id
      })
      isItemExisting = (existingItem != undefined);
    }

    if (isItemExisting) {
      existingItem.quantity++;
    }
    else {
      this.cartItemsList.push(cartItem)
    }

    this.updateCartTotal();
  }

  updateCartTotal() {

    let totalPrice: number = 0;
    let totalQuantity: number = 0;

    for (let tempItem of this.cartItemsList) {

      totalPrice += tempItem.quantity * tempItem.price;
      totalQuantity += tempItem.quantity;
    }

    // bind values beetween components
    this.total.next(totalPrice);
    this.quantity.next(totalQuantity);

    this.logVal(totalPrice,totalQuantity)
  }
  logVal(tp:number, tq:number){
    
    for(let temp of this.cartItemsList){
      const tp = temp.quantity* temp.price
      console.log("price: "+ tp)
      console.log(`${temp.title} : ${temp.price} x ${temp.quantity}`)
    }
    console.log("tp: "+tp+" tq: "+tq)
  }
}

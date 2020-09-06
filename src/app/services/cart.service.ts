import { Injectable } from '@angular/core';
import { CartItem } from "../utils/cartitem"
import { Subject } from 'rxjs';
import { Item } from '../utils/item';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemsList: CartItem[] =new Array();
  total: Subject<number> = new Subject<number>();
  quantity: Subject<number> = new Subject<number>();

  constructor() { }

  addItem(cartItem: CartItem) {

    let isItemExisting: boolean = false;
    let existingItem: CartItem = undefined;

    if (this.cartItemsList.length > 0) {
      for (let tempItem of this.cartItemsList) {
        if (tempItem.id === cartItem.id) {
          existingItem = tempItem
          break;
        }
      }
      isItemExisting = (existingItem != undefined);
    }

    if (isItemExisting) {
      for (let tempItem of this.cartItemsList) {
        if (tempItem.id === existingItem.id)
          tempItem.quantity++
      }
    }
    else {
      this.cartItemsList.push(cartItem)
    }
    this.updateCartTotal();
  }
  decrementItem(cartItem: CartItem) {
    if (cartItem.quantity === 1) {
      this.removeItemFromCart(cartItem)
    }
    else {
      cartItem.quantity--;
      this.updateCartTotal()
    }
  }
  removeItemFromCart(cartItem: CartItem) {
    let id: number = -1
    for (let tempItem of this.cartItemsList) {
      if (tempItem.id === cartItem.id) {
        id = this.cartItemsList.indexOf(tempItem)
      }
    }
  
    if (id > -1 && this.cartItemsList.length > 0) {
      //remove 1 item with the given id
         this.cartItemsList.splice(id)
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
  }
}

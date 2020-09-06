import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/utils/cartitem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItemsList: CartItem[];

  total: number = 0;
  quantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems()
  }
  getCartItems() {
    this.cartItemsList = this.cartService.cartItemsList;

    this.cartService.total.subscribe(value => {
      this.total = value
    })
    this.cartService.quantity.subscribe(value => {
      this.quantity = value
    })
    // update changed values
    this.cartService.updateCartTotal();
  }

  decrementItemQuantity(cartItem:CartItem){
    this.cartService.decrementItem(cartItem)
  }
  incrementItemQuantity(cartItem:CartItem){
    this.cartService.addItem(cartItem)
  }
}

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent implements OnInit {

  totalPrice: number = 0.0;
  totalQuantity: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartBadge();
  }
  updateCartBadge() {
    this.cartService.total.subscribe(res => {
      this.totalPrice = res
    })
    this.cartService.quantity.subscribe(res => {
      this.totalQuantity = res
    })
  }
}

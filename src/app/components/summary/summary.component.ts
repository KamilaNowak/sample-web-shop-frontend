import { Component, OnInit } from '@angular/core';
import { Customer } from '../../utils/customer';
import { Shipping } from '../../utils/shipping';
import { Payment } from '../../utils/payment';
import { FormService } from 'src/app/services/form.service';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from '../../utils/cartitem'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent implements OnInit {

  customerData: Customer;
  paymentData: Payment;
  shippingData: Shipping;
  cartItemsList: CartItem[];

  constructor(private formService: FormService, private cartService: CartService) { }

  updatePurchaseDetails() {
    this.formService.customerData.subscribe(res => {
      this.customerData = res
    })

    this.formService.shippingData.subscribe(res => {
      this.shippingData = res
    })

    this.formService.paymentData.subscribe(res => {
      console.log(res.cardNumber+" "+ res.securityCode)
      this.paymentData = res
    })
  }

  updateCartItemList() {
    this.cartService.totalCartItemsList.subscribe( result =>{
      this.cartItemsList = result
    })
  }
  ngOnInit(): void {
    this.updatePurchaseDetails()
    this.updateCartItemList()
  }
}

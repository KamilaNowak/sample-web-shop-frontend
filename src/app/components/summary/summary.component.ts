import { Component, OnInit } from '@angular/core';
import { Customer } from '../../utils/customer';
import { Shipping } from '../../utils/shipping';
import { Payment } from '../../utils/payment';
import { FormService } from 'src/app/services/form.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})


export class SummaryComponent implements OnInit {

  customerData: Customer;
  paymentData: Payment;
  shippingData: Shipping;

  constructor(private formService: FormService) { }

  updatePurchaseDetails() {
   this.formService.customerData.subscribe(res => {
     this.customerData = res
   })

   this.formService.shippingData.subscribe(res =>{
     this.shippingData = res
   })

   this.formService.paymentData.subscribe(res =>{ 
     this.paymentData = res
   })
  }
  ngOnInit(): void {
    this.updatePurchaseDetails()
  }
}

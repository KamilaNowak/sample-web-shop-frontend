import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { FormService } from '../../services/form.service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchaseFormModule: FormGroup;
  constructor(private formBuilder: FormBuilder, private formService: FormService, private router:Router) { }

  totalPrice: number = 0;
  totalQuantity: number = 0;

  ngOnInit(): void {

    this.purchaseFormModule = this.formBuilder.group({
      customer: this.formBuilder.group({
        name: [''],
        surname: [''],
        email: [''],
        phoneNumber: [''],
      }),
      shipping: this.formBuilder.group({
        postalCode: [''],
        country: [''],
        city: [''],
        street: [''],
        building: ['']
      })
    })
  }
  onSubmit() {
    this.setCustomerDataFromService(this.purchaseFormModule)
    this.setShippingDataFromService(this.purchaseFormModule)
    this.router.navigateByUrl("/payment")
  }


  setCustomerDataFromService(customerForm: FormGroup) {
    this.formService.setCustomerData(customerForm)
  }

  setShippingDataFromService(shippingForm: FormGroup) {
    this.formService.setShippingData(shippingForm)
  }

}

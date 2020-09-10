import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {


  purchaseFormModule: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.purchaseFormModule = this.formBuilder.group({
      customer: this.formBuilder.group({
        name:[''],
        surname:[''],
        email:[''],
        phoneNumber:[''],
      }),
      shipping: this.formBuilder.group({
        postalCode:[''],
        country:[''],
        city:[''],
        street:[''],
        building:['']
      }),
      payment:this.formBuilder.group({
        cardType:[''],
        cardNumber:[''],
        securityCode:[''],
        expirationDate:['']
      })
    })
  }
  onSubmit(){
    console.log(this.purchaseFormModule.get('customer').value)
  }

}

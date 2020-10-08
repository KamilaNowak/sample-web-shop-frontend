import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentFormModule: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.paymentFormModule = this.formBuilder.group({
      payment: this.formBuilder.group({
        cardType: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationDate: ['']
      })
    })
  }

  onSubmit() {
    console.log("Submit")
  }

}

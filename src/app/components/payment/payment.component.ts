import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import {Router} from "@angular/router"
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentFormModule: FormGroup
  constructor(private formBuilder: FormBuilder, private router: Router, private formService: FormService) { }

  ngOnInit(): void {

    this.paymentFormModule = this.formBuilder.group({
      payment: this.formBuilder.group({
        cardType: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationDate: ['']
      }),
    })
  }

  onSubmit() {
    this.setPaymentDataFromService(this.paymentFormModule)
    this.router.navigateByUrl("/summary")
  }

  setPaymentDataFromService(paymentForm: FormGroup){
    this.formService.setPaymentData(paymentForm);
  }

}

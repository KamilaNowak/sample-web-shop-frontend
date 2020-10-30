import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { Customer } from '../utils/customer';
import { Shipping } from '../utils/shipping';
import { Payment } from '../utils/payment';
import { Observable } from 'rxjs';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  customerData = new BehaviorSubject<Customer>(null);
  paymentData  = new BehaviorSubject<Payment>(null);
  shippingData = new BehaviorSubject<Shipping>(new Shipping);

  constructor() { }

  setCustomerData(customerForm: FormGroup) {
    let customer = new Customer()
    customer.name=customerForm.get('customer.name').value
    customer.name = customerForm.get('customer.name').value
    customer.surname = customerForm.get('customer.surname').value
    customer.email = customerForm.get('customer.email').value
    customer.phoneNumber = customerForm.get('customer.phoneNumber').value
    this.customerData.next(customer);
  }

  setShippingData(shippingForm: FormGroup) {
    let shipping = new Shipping()
    shipping.building = shippingForm.get("shipping.building").value
    shipping.postalCode = shippingForm.get("shipping.postalCode").value
    shipping.country = shippingForm.get("shipping.country").value
    shipping.city = shippingForm.get("shipping.city").value
    shipping.street = shippingForm.get("shipping.street").value
    this.shippingData.next(shipping)
  }
  
  setPaymentData(paymentForm: FormGroup){
    let payment = new Payment();
    payment.cardNumber = paymentForm.get("cardNumber").value;
    payment.cardType = paymentForm.get("cardType").value;
    payment.expirationDate = paymentForm.get("expirationDate").value;
    payment.securityCode = paymentForm.get("securityCode").value;
    this.paymentData.next(payment);
  }  
  updateSummary() {

  }
}

import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
declare var window: any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  createCategory: any;
  // addcostum: any;
  costoms: any;
  paymentMethod: any;
  name: string | null = null;
  constructor(private transactionService: TransactionService) {}
  ngOnInit(): void {
    // card modal
    this.createCategory = new window.bootstrap.Modal(
      document.getElementById('createCategory')
    );
    // displaying the costumer name
    this.transactionService.costom().subscribe((result: any) => {
      this.costoms = result;
      console.log(result);
    });

    //paymentMetod
    this.paymentMethod = new window.bootstrap.Modal(
      document.getElementById('showpayment')
    );
  }
  // cardmodal
  openModal() {
    this.createCategory.show();
  }
  // cardmodal
  closeModal() {
    this.createCategory.hide();
  }
  changePayment(newValue: string) {
    if (newValue == 'Charge') {
      this.openModal();
    }
  }
  openPayment() {
    this.paymentMethod.show();
  }

  // divshow of card
  nextFunct() {
    console.log('lea');
  }
  setName(name: string) {
    this.name = name;
    this.closeModal();
  }
}

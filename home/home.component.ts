import { Component, OnInit } from '@angular/core';

declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  checkoutModal: any;
  ngOnInit(): void {
    this.checkoutModal = new window.bootstrap.Modal(
      document.getElementById('checkoutModal')
    );
  }
  openModal() {
    this.checkoutModal.show();
  }
  closeModal() {
    this.checkoutModal.hide();
  }
}

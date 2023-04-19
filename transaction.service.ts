import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost/transaction/';
  costom() {
    return this.http.get(this.url + 'displayCostumer.php');
  }
}

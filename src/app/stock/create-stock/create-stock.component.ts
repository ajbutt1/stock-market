import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {
  public stock: Stock;
  public confirmed = false;

  public exchanges: Array<string> = ['NYSE', 'NASDAQ', 'OTHER'];

  constructor() {
    this.stock = new Stock('', '', 0, 0, 'NASDAQ');
  }

  setStockPrice(price) {
    this.stock.previousPrice = this.stock.price;

    setTimeout(() => {
      this.stock.price = price;
    }, 1000);
  }

  createStock(stockForm) {
    console.log('Stock form', stockForm);
    if (stockForm.valid) {
      console.log('Creating stock ', this.stock);
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
}

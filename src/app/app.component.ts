import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stock Market App';

  public stockObj: Stock;
  private counter: number = 1;

  ngOnInit() {
    this.stockObj = new Stock('Test Stock Company - ' + this.counter++,
      'TSC', 85, 80, '');
  }

  onToggleFavorite(stock: Stock) {
    // This will update the value in the stock item component
    // Because it is triggered as a result of an event
    // binding from the stock item component
    this.stockObj.favorite = !this.stockObj.favorite;
  }

  changeStockObject() {
    // This will update the value in the stock item component
    // Because we are creating a new reference for the stock input
    this.stockObj = new Stock('Test Stock Company - ' + this.counter++,
      'TSC', 85, 80, '');
  }

  changeStockPrice() {
    // This will not update the value in the stock item component
    // because it is changing the same reference and angular will
    // not check for it in the OnPush change detection strategy.
    this.stockObj.price += 10;
  }

  testMethod() {
    console.log('Test method in AppComponent triggered');
  }
}

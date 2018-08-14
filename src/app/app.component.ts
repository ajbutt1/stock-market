import { Component, OnInit, OnChanges,
         OnDestroy, DoCheck, AfterContentChecked,
         AfterContentInit, AfterViewChecked, AfterViewInit, SimpleChanges } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy,
  DoCheck, AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit {
  title = 'Stock Market App';

  public stock: Stock;
  private counter: number = 1;

  ngOnInit() {
    this.stock = new Stock('Test Stock Company - ' + this.counter++,
      'TSC', 85, 80);
    console.log('App Component - On Init');
  }

  onToggleFavorite(stock: Stock) {
    // This will update the value in the stock item component
    // Because it is triggered as a result of an event
    // binding from the stock item component
    this.stock.favorite = !this.stock.favorite;
  }

  changeStockObject() {
    // This will update the value in the stock item component
    // Because we are creating a new reference for the stock input
    this.stock = new Stock('Test Stock Company - ' + this.counter++,
      'TSC', 85, 80);
  }

  changeStockPrice() {
    // This will not update the value in the stock item component
    // because it is changing the same reference and angular will
    // not check for it in the OnPush change detection strategy.
    this.stock.price += 10;
  }

  ngAfterViewInit(): void {
    console.log('App Component - After View Init');
  }
  ngAfterViewChecked(): void {
    console.log('App Component - After View Checked');
  }
  ngAfterContentInit(): void {
    console.log('App Component - After Content Init');
  }
  ngAfterContentChecked(): void {
    console.log('App Component - After Content Checked');
  }
  ngDoCheck(): void {
    console.log('App Component - Do Check');
  }
  ngOnDestroy(): void {
    console.log('App Component - On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('App Component - On Changes - ', changes);
  }
}

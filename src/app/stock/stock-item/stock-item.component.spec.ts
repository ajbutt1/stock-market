import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemComponent } from './stock-item.component';
import { Stock } from '../../model/stock';
import { By } from '@angular/platform-browser';

fdescribe('StockItemComponent', () => {
  let component: StockItemComponent;
  let fixture: ComponentFixture<StockItemComponent>;

  // We ensure templates are loaded in the components
  beforeEach(async(() => {
    // Angular testing utilities to configure a module for testing
    // Like the NgModule for the components
    TestBed.configureTestingModule({
      declarations: [ StockItemComponent ]
    })
    .compileComponents(); // compile mentioned components for later use
  }));

  // Non-async, executed only after the previous finishes
  beforeEach(() => {
    // We create a fixture of the component under test
    // This is the instance of the component
    fixture = TestBed.createComponent(StockItemComponent);
    // Underlying component instance from the test fixture
    component = fixture.componentInstance;
    component.stock = new Stock('Testing Stock', 'TS', 100, 200);
    // triggers Angular Change Detection to update templates
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create stock component and render stock data', () => {
    // We get the particular HTML element from compiled element
    const nameEl = fixture.debugElement.query(By.css('.name'));
    // We verify element has expected value!
    expect(nameEl.nativeElement.textContent).toEqual('Testing Stock - TS');
    const priceEl = fixture.debugElement.query(By.css('.negative'));
    expect(priceEl.nativeElement.textContent).toEqual(' $ 100 ');
    const addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
    expect(addToFavoriteBtnEl).toBeDefined();
  });

  it('should trigger event emitter on add to favorite', () => {
    let selectedStock: Stock;
    const addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));

    // We subscribe to the output EventEmitter for a click to happen
    component.toggleFavorite.subscribe(
      (stock: Stock) => selectedStock = stock);
    expect(selectedStock).toBeUndefined();

    // We trigger the click event on the button
    // An event is emitted with the current stock value
    addToFavoriteBtnEl.triggerEventHandler('click', null);
    expect(selectedStock).toEqual(component.stock);
  });
});

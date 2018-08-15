import { AppComponent } from './app.component';
import { Stock } from './model/stock';

fdescribe('AppComponent', () => {
  it('should have stock instantiated on ngInit', () => {
    const appComponent = new AppComponent();
    expect(appComponent.stockObj).toBeUndefined();

    appComponent.ngOnInit();
    expect(appComponent.stockObj).toEqual(
      new Stock('Test Stock Company - 1', 'TSC', 85, 80));
  });
});

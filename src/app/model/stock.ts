export class Stock {
  favorite: Boolean = false;

  constructor(
    public name: string,
    public code: string,
    public price: number,
    public previousPrice: number
  ) { }

  isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
  }
}

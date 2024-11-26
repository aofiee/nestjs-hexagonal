export class Order {
  constructor(
    public id: string,
    public items: string[],
    public total: number,
  ) {
    // function body
  }

  calculateTotal() {
    if (Array.isArray(this.items)) {
      this.total = this.items.reduce((sum, item) => sum + parseFloat(item), 0);
    } else {
      console.error('this.items is not an array', this.items);
      this.total = 0; // Default total if items is invalid
    }
  }
}

export class App {
  constructor() {
    this.products = [
      {id: 0, name: "Motherboard"},
      {id: 1, name: "CPU"},
      {id: 2, name: "Memory"},
    ];

    this.selectedProduct = { id: 1, name: 'CPU' };

    this.productMatcher = (a, b) => {
      console.log("match", a, b);
      return a.id === b.id;
    }
  }
}

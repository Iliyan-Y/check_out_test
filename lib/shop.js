class Shop {
  constructor() {
    this.priceMap = {
      A: 50,
      B: 30,
      C: 20,
      D: 15,
    };
  }

  calculateSum(sku) {
    let total = 0;
    if (typeof sku == 'string') {
      sku.split('').map((letter) => (total += this.priceMap[letter]));
      return total;
    }
  }

  checkout(sku) {
    if (this.calculateSum(sku)) return this.calculateSum(sku);
    return -1;
  }
}

module.exports = Shop;

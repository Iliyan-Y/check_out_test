class Shop {
  constructor() {
    this.priceMap = {
      A: 50,
      B: 30,
      C: 20,
      D: 15,
    };
  }

  calculateItems(sku) {
    let discMap = {
      A: 0,
      B: 0,
    };
    sku.split('').map((letter) => (discMap[letter] += 1));
    return discMap;
  }

  calculateDiscount(total, sku) {
    let items = this.calculateItems(sku);
    let aDiscount = Number.isInteger(items['A'] / 3)
      ? (items['A'] / 3) * 20
      : 0;
    let bDiscount = Number.isInteger(items['B'] / 2)
      ? (items['B'] / 2) * 15
      : 0;

    return total - aDiscount - bDiscount;
  }

  calculateSum(sku) {
    let total = 0;
    if (typeof sku == 'string') {
      sku.split('').map((letter) => (total += this.priceMap[letter]));
      return this.calculateDiscount(total, sku);
    }
  }

  checkout(sku) {
    if (this.calculateSum(sku)) return this.calculateSum(sku);
    return -1;
  }
}

module.exports = Shop;

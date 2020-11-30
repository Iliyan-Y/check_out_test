class Shop {
  constructor() {
    this.priceMap = {
      A: 50,
      B: 30,
      C: 20,
      D: 15,
    };
  }

  checkout(sku) {
    if (this.priceMap[sku]) return this.priceMap[sku];

    return -1;
  }
}

module.exports = Shop;

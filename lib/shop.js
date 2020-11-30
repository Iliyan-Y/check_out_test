class Shop {
  constructor() {
    this.priceMap = {
      A: 50,
      B: 30,
    };
  }

  checkout(sku) {
    return this.priceMap[sku];
  }
}

module.exports = Shop;

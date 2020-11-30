describe('Shop', () => {
  const Shop = require('../lib/shop');

  beforeEach(() => {
    shop = new Shop();
  });

  it('Shout return 50 for a single letter letter A', () => {
    expect(shop.checkout('A')).toEqual(50);
  });

  it('Shout return 30 for a single letter letter B', () => {
    expect(shop.checkout('B')).toEqual(30);
  });
});

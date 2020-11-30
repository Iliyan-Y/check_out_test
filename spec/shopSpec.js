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

  it('Shout return 20 for a single letter letter C', () => {
    expect(shop.checkout('C')).toEqual(20);
  });

  it('Shout return 15 for a single letter letter D', () => {
    expect(shop.checkout('D')).toEqual(15);
  });
});

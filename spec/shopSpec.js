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

  it('Shout return -1 for a invalid input', () => {
    expect(shop.checkout(18)).toEqual(-1);
  });

  it('Shout return the sum of inputs', () => {
    expect(shop.checkout('AA')).toEqual(100);
  });

  it('Shout return the sum of all different inputs', () => {
    expect(shop.checkout('ABCD')).toEqual(115);
  });
});

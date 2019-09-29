const Product = require('./product');
const OptionSimple = require('./option_simple');
const OptionIncrease = require('./option_increase');
const OptionReplace = require('./option_replace');
const OptionPromo = require('./option_promo');

const percentageDiscount = function promo(amount) {
  return amount - (amount * 0.10);
};
const fixedDiscount = function promo(amount) {
  return amount - 10;
};

const p = new Product({ amount: 25 });
const s = new OptionSimple({ amount: 0, parent: p });
const i = new OptionIncrease({ amount: 3, parent: p });
const r = new OptionReplace({ amount: 19, parent: p });
const pd = new OptionPromo({ promo: percentageDiscount, parent: p });
const pf = new OptionPromo({ promo: fixedDiscount, parent: p });
console.log(p.amount, p.price, p.type);
console.log(s.parent.amount, s.price, s.type);
console.log(i.parent.amount, i.price, i.type);
console.log(r.parent.amount, r.price, r.type);
console.log(pd.parent.amount, pd.price, pd.type);
console.log(pf.parent.amount, pf.price, pf.type);

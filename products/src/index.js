const Product = require('./product');
const OptionSimple = require('./option_simple');
const OptionIncrease = require('./option_increase');
const OptionReplace = require('./option_replace');
const OptionPromo = require('./option_promo');

const percentageDiscount = function promo(amount) {
  return amount - (amount * 0.20);
};
const fixedDiscount = function promo(amount) {
  return amount - 10;
};

const p = Product({ amount: 100 });
const s = OptionSimple({ parent: p });
const i = OptionIncrease({ amount: 3, parent: p });
const r = OptionReplace({ amount: 19, parent: p });
const pd = OptionPromo({ promo: percentageDiscount, parent: p });
const pf = OptionPromo({ promo: fixedDiscount, parent: p });
console.log(p.amount, p.price(), p.type);
console.log(s.parent.amount, s.price(), s.type);
console.log(i.parent.amount, i.price(), i.type);
console.log(r.parent.amount, r.price(), r.type);
console.log(pd.parent.amount, pd.price(), pd.type);
console.log(pf.parent.amount, pf.price(), pf.type);

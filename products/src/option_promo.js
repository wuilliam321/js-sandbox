const BaseProduct = require('./base_product');


function OptionPromo(product) {
  Object.assign(this, BaseProduct, product);
  this.type = 'PROMO';

  function price() {
    return this.promo(this.parent.amount);
  }

  const {
    parent, amount, type, promo,
  } = this;

  return {
    price,
    parent,
    amount,
    type,
    promo,
  };
}


module.exports = OptionPromo;

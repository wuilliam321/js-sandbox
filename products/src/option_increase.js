const BaseProduct = require('./base_product');

function OptionIncrease(product) {
  Object.assign(this, BaseProduct, product);
  this.type = 'INCREASE';

  function price() {
    return this.parent.amount + this.amount;
  }

  const { parent, amount, type } = this;

  return {
    price,
    parent,
    amount,
    type,
  };
}

module.exports = OptionIncrease;

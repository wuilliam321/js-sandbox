const BaseProduct = require('./base_product');

function OptionReplace(product) {
  Object.assign(this, BaseProduct, product);
  this.type = 'REPLACE';

  function price() {
    return this.amount;
  }

  const { parent, amount, type } = this;

  return {
    price,
    parent,
    amount,
    type,
  };
}

module.exports = OptionReplace;

const BaseProduct = require('./base_product');

function OptionSimple(product) {
  Object.assign(this, BaseProduct, product);
  this.type = 'SIMPLE';

  function price() {
    return 0;
  }

  const { parent, amount, type } = this;

  return {
    price,
    parent,
    amount,
    type,
  };
}

module.exports = OptionSimple;

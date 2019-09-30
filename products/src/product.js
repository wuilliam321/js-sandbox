const BaseProduct = require('./base_product');

function Product(product) {
  Object.assign(this, BaseProduct, product);
  this.type = 'PRODUCT';

  const {
    price, parent, amount, type,
  } = this;

  return {
    price,
    parent,
    amount,
    type,
  };
}


module.exports = Product;

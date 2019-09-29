const BaseProduct = require('./base_product');

class Product extends BaseProduct {
  constructor(product) {
    super(product);
    this.type = 'PRODUCT';
  }
}

module.exports = Product;

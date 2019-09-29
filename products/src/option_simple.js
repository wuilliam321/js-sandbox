const BaseProduct = require('./base_product');

class OptionSimple extends BaseProduct {
  constructor(option) {
    super(option);
    this.type = 'SIMPLE';
  }
}

module.exports = OptionSimple;

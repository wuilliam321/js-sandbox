const BaseProduct = require('./base_product');

class OptionReplace extends BaseProduct {
  constructor(option) {
    super(option);
    this.type = 'REPLACE';
  }

  get price() {
    return this.amount;
  }
}

module.exports = OptionReplace;

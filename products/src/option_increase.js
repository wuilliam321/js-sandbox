const BaseProduct = require('./base_product');

class OptionIncrease extends BaseProduct {
  constructor(option) {
    super(option);
    this.type = 'INCREASE';
  }

  get price() {
    return this.parent.amount + this.amount;
  }
}

module.exports = OptionIncrease;

const BaseProduct = require('./base_product');

class OptionPromo extends BaseProduct {
  constructor(option) {
    super(option);
    this.type = 'PROMO';
  }

  get price() {
    return this.promo(this.parent.amount);
  }
}

module.exports = OptionPromo;

class BaseProduct {
  constructor(productObject) {
    Object.assign(this, productObject);
  }

  get price() {
    return this.amount;
  }

  set price(newPrice) {
    this.price = newPrice;
  }

  get parent() {
    return this.product;
  }

  set parent(newParent) {
    this.product = newParent;
  }
}

module.exports = BaseProduct;

const BaseProduct = (function BaseProduct() {
  function price() {
    return this.amount;
  }

  function parent() {
    return this.product;
  }

  return {
    price,
    parent,
  };
}());

module.exports = BaseProduct;

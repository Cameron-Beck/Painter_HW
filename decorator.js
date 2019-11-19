const Decorator = function () {
  this.stock = [];
}


Decorator.prototype.addPaint = function(paint) {
  return this.stock.push(paint)
}

module.exports = Decorator;

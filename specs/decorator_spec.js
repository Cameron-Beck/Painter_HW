const assert = require('assert');
const Decorator = require('../decorator.js');

describe('Decorator', function (){
  let decorator
  beforeEach(function (){
     decorator = new Decorator()
  });
  it('should start with an empty paint stock', function (){
    const decorator = new Decorator();
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 0);
  });
  it('should be able to add cans of paint to the stock', function(){
    const decorator = new Decorator();
    decorator.addPaint('red-paint');
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 1)
  });
  it('should be able to check the total litres in stock', function(){
    const decorator = new Decorator();
    decorator.addPaint('red-paint');
    decorator.addPaint('green-paint');
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 2)
  });
});

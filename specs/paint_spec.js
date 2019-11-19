const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function (){
  let paint
  beforeEach(function (){
     paint = new Paint(10)
  });
  it('should have a number of litres of paint', function (){
    const paint = new Paint(10);
    const actual = paint.volume;
    assert.strictEqual(actual, 10);
  });
  xit("should be able to check if it's empty", function (){
    const paint = new Paint(0);
    const actual = paint.volume.checkEmpty;
    assert.strictEqual(actual, true);
  });
  it('should be able to empty itself', function(){
    const paint = new Paint(10);
    paint.emptySelf();
    const actual = paint.volume;
    assert.strictEqual(actual, 0);
  });
});

const assert = require('assert');
const Room = require('../room.js');

describe('Room', function (){
  let room
  beforeEach(function (){
     room = new Room(12, false)
  });
  it('should have an area in square metres', function (){
    const room = new Room(12, false);
    const actual = room.area;
    assert.strictEqual(actual, 12);
  });
  it('should start off unpainted', function (){
    const room = new Room(12, false);
    const actual = room.painted;
    assert.strictEqual(actual, false)
  });
  it('should be able to be painted', function (){
    const room = new Room(12, false);
    room.paintRoom()
    const actual = room.painted;
    assert.strictEqual(actual, true)
  });
});

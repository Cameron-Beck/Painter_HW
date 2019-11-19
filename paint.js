const Paint = function (volume) {
  this.volume = volume;
}

Paint.prototype.checkEmpty = function() {
  if (this.volume < 1) {
    return true;
  } else {
    return false;
  }
}

Paint.prototype.emptySelf = function() {
  this.volume = 0;
}

module.exports = Paint;

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'blinky');
  this.orientation = 0;
  this.cartWheelRight = true;
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.orientation = (this.orientation + 90) % 360;
  this.flip('Z', this.orientation);
  if (this.cartWheelRight) {
    if ($("body").width() - this.left < 50) {
      this.cartWheelRight = false;
    }
    this.left +=30;
  } else {
    if (this.left < 50) {
      this.cartWheelRight = true;
    }
    this.left -= 30;
  }
  this.setPosition(this.top, this.left);
};

makeBlinkyDancer.prototype.flip = function(direction, deg){
  var styles = {
    transform: 'rotate' + direction + '(' + deg + 'deg)'
  };

  this.$node.css(styles);
}
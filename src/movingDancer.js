var makeMovingDancer = function(top, left, timeBetweenSteps, movingPace) {
  this.movingPace = movingPace;
  this.upOrDown = true;
  var extraClass = "movingDancer";
  makeDancer.call(this, top, left, timeBetweenSteps, extraClass);
  //this.$node = $('<span class="movingDancer"></span>');
}
makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;
makeMovingDancer.prototype.step = function() {
  if(this.upOrDown){
    this.top = this.movingPace + this.top;
  } else {
    this.top = this.top - this.movingPace;
  }
  this.upOrDown = !this.upOrDown;
  this.setPosition(this.top, this.left);
  makeDancer.prototype.step.call(this);
};
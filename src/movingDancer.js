var makeMovingDancer = function(top, left, timeBetweenSteps, movingPace) {
  this.movingPace = movingPace;
  this.upOrDown = true;
  var extraClass = "moving";
  makeDancer.call(this, top, left, timeBetweenSteps, extraClass);
}
makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;
makeMovingDancer.prototype.step = function() {
  // if(this.upOrDown){
  //   this.top = this.movingPace + this.top;
  // } else {
  //   this.top = this.top - this.movingPace;
  // }

  this.$node.animate({top: '' + (this.top - this.movingPace) +'px'}, this.timeBetweenSteps/2);
  this.$node.animate({top: '' + this.top +'px'}, this.timeBetweenSteps/2);
  this.$node.animate({top: this.top, left: this.left});
  makeDancer.prototype.step.call(this);
};
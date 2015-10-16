var makeObamaDancer = function(top, left, timeBetweenSteps, movingPace) {
  this.movingPace = movingPace;
  var extraClass = 'obama';
  makeDancer.call(this, top, left, timeBetweenSteps, extraClass);  
}
makeObamaDancer.prototype = Object.create(makeDancer.prototype);
makeObamaDancer.prototype.constructor = makeObamaDancer;
makeObamaDancer.prototype.step = function() {
  if(this.upOrDown){
    this.rotate(this.$face, 20);  
  } else {
    this.rotate(this.$face, -20);
  }
  this.upOrDown = !this.upOrDown; 
  makeDancer.prototype.step.call(this);
};
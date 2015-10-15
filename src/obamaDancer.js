var makeObamaDancer = function(top, left, timeBetweenSteps, movingPace) {
  this.movingPace = movingPace;
  this.upOrDown = true;
  var extraClass = 'obama';
  //var $node = $('<img src="http://pngimg.com/upload/face_PNG5649.png" class="movingDancer" "obama">');
  makeDancer.call(this, top, left, timeBetweenSteps, extraClass);  
}
makeObamaDancer.prototype = Object.create(makeDancer.prototype);
makeObamaDancer.prototype.constructor = makeObamaDancer;
makeObamaDancer.prototype.step = function() {
  if(this.upOrDown){
    this.top = this.movingPace + this.top;
  } else {
    this.top = this.top - this.movingPace;
  }
  this.upOrDown = !this.upOrDown;
  this.setPosition(this.top, this.left);
  makeDancer.prototype.step.call(this);
};
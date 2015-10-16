var makeTrumpDancer = function(top, left, timeBetweenSteps, movingPace) {
  this.movingPace = movingPace;
  var extraClass = 'trump';
  makeDancer.call(this, top, left, timeBetweenSteps, extraClass);  
  this.hop = false;
}
makeTrumpDancer.prototype = Object.create(makeDancer.prototype);
makeTrumpDancer.prototype.constructor = makeTrumpDancer;
makeTrumpDancer.prototype.step = function() {
  if(!this.hop){  
    if(this.upOrDown){
      //this.rotate(this.$face, 20);  
      this.left = this.left + 30;
      this.$node.animate({left: '' + this.left +'px'}, this.timeBetweenSteps);
    } else {
      //this.rotate(this.$face, -20);
      this.left = this.left - 30;
      this.$node.animate({left: '' + this.left +'px'}, this.timeBetweenSteps);
    }
    this.upOrDown = !this.upOrDown;
    this.hop = true;
  } else {
    this.$node.animate({top: '' + (this.top - 40) +'px'}, this.timeBetweenSteps/2);
    this.$node.animate({top: '' + this.top +'px'}, this.timeBetweenSteps/2);
    this.hop = false;
  } 
  makeDancer.prototype.step.call(this);
};
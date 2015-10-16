// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, otherClass) {
  otherClass = otherClass || 'dancer';
  this.$node = $('<span class = "people"></span>');
  this.$face = $('<div class = "' + otherClass + ' face"></div>');
  this.$dancingBody = $('<div class = "figure"></div>');
  this.$face.appendTo(this.$node);
  this.$dancingBody.appendTo(this.$node);
  this.timeBetweenSteps = timeBetweenSteps;
  this.originalTop = top;
  this.originalLeft = left;
  this.top = top;
  this.left = left;
  this.timeOutID = 0;
  this.upOrDown = true;
  this.currentHeadAngle = 0;
  this.setPosition(this.top, this.left);
  this.step();
};

makeDancer.prototype.step = function() {
  this.timeOutID = setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
makeDancer.prototype.rotate = function($DOMelement, deg) {
  $DOMelement.animateRotate(this.currentHeadAngle, deg, this.timeBetweenSteps);
  this.currentHeadAngle = deg;
};
// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, otherClass) {
  otherClass = otherClass || 'dancer';
  //this.$node = $('<span class = "people"><div class="figure"></div><div class="' + otherClass + '"></div></span>');
  this.$node = $('<span class = "people"></span>');
  this.$face = $('<div class = "' + otherClass + ' face"></div>');
  this.$dancingBody = $('<div class = "figure"></div>');
  this.$face.appendTo(this.$node);
  this.$dancingBody.appendTo(this.$node);
  console.dir(this.$node);
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.setPosition(this.top, this.left);
  this.step();
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };
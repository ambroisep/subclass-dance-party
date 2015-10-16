$(document).ready(function() {
  window.dancers = [];

  $.fn.animateRotate = function(initialAngle, angle, duration, easing, complete) {
    return this.each(function() {
      var $elem = $(this);

      $({deg: initialAngle}).animate({deg: angle}, {
        duration: duration,
        easing: easing,
        step: function(now) {
          $elem.css({
             transform: 'rotate(' + now + 'deg)'
           });
        },
        complete: complete || $.noop
      });
    });
  };

  $(".dropDownDancerMenu").mouseout(function(){
    $(".dropDownDancerMenu").toggle();
  });

  $(".chooseDancerButton").on("click", function(event){
    $(".dropDownDancerMenu").toggle();
  });

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() - (200 + 150 * Math.random()),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      Math.random() * 50
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".alignDancersButton").on("click", function(event) {
    var alignClass = "align";
    var newTop = $("body").height() - (200 + 150 * Math.random());
    for (var i = 0; i < window.dancers.length; i++) {
      var currDancer = window.dancers[i];
      clearTimeout(currDancer.timeOutID);
      var newLeft =  (i + 1) * ($("body").width() / (window.dancers.length + 2));
      currDancer.$node.toggleClass(alignClass);
      currDancer.step = makeObamaDancer.prototype.step;
      currDancer.timeBetweenSteps = 500;
      currDancer.top = newTop;
      currDancer.left = newLeft;
      currDancer.$node.animate({left: newLeft, top: newTop});      
      currDancer.$node.css({transform: 'rotate(0deg)'});
      currDancer.step();
    }
  });
});


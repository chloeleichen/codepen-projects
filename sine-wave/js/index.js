(function(){
  'use strict';
  var counter = 0,
      dots = Array.prototype.slice.call(document.querySelectorAll(".dot-inner")),
      increase = Math.PI / 100,
      decrease = Math.PI / 12;
  
 function move(){
   var i, y;
   for(i =0; i < dots.length; i ++){
     var y = -(Math.sin( counter - decrease*i ) * 60 + 60) + 'px';
      dots[i].style.transform = 'translate(0, '+y+')';
      dots[i].style.MozTransform = 'translate(0, '+y+')';       
      dots[i].style.WebkitTransform = 'translate(0, '+y+')';
   }
      counter += increase;
      window.requestAnimationFrame(move);
  }
  
  function init(){
    window.requestAnimationFrame(move);
  }  
  init();
})();
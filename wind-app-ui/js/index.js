(function(){
  'use strict';
var previous = document.getElementById('previous'),
    next = document.getElementById('next'),
    listElement = document.querySelector('.wind--date'),
    list = [].slice.call(document.querySelectorAll('.wind--date li')),
    current,
    currentIndex = 0,
    width = 300;
    
function activate (){  
    current = list[currentIndex];
    listElement.style.marginLeft = -(currentIndex * width ) + 'px';
}

var navigate = function(el){
    el.addEventListener("click" , eventHandler);
};

function eventHandler(e){
  e.preventDefault();
  var change;  
  if(e.target == next){
    if(currentIndex < list.length-1){
      currentIndex ++;
      updateNavState()
    }else{
      return false;
    }
  } else if(e.target == previous) {
     if(currentIndex > 0){
      currentIndex --;
      updateNavState()
    }else{
      return false;
    }
  }
  activate();
}

function updateNavState(){
  if(currentIndex !== 0){
    previous.classList.remove("is-disabled");
  } else{
    previous.classList.add("is-disabled");
  }
  if(currentIndex !== list.length-1){
    next.classList.remove("is-disabled");
  } else{
    next.classList.add("is-disabled");
  }
}
navigate(previous);
navigate(next);
})();

//randomly update value
(function(){
  var direction = document.getElementById('wind--number__value');
  function update(value){
    direction.textContent = value;
  }
  
  //update(Math.floor(Math.random()*10 + 3));
  setInterval(function handler (){
    update(Math.floor(Math.random()*10 + 3));
  }, 3000);
  
})();
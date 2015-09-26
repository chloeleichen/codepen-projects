(function(){
  'use strict';
  var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      buffer = document.createElement('canvas'),
      width = 300,
      height = 300,
      cHeight = height*2 > (window.innerHeight - 30) ? (window.innerHeight - 30) : height*2,
      cWidth = width,
      bContext = buffer.getContext('2d'),
      w = 200,
      h = 200,
      r = 10,
      R = width/2,
      CenterX = width/2, 
      CenterY = cHeight - R,
      grid = 5,
      left =(width - w)/2,
      top = (height - h)/2,
      arr = [], i, j, dot, x, y,c,
      color = ["#D21B4E","#12F3FA","#F80B9C","#FEF614"],
      gravity = 0.2,
		  bounceFactor = 0.8;
  
  canvas.width = cWidth;
  canvas.height = cHeight;
  buffer.width = cWidth;
  buffer.height = cHeight;
  
  var Dot = function(x, y, color){
    this.x = x;
    this.y = y;
    this.speedY = 1;
    this.speedX = 0;
    
    function move(){
      if((this.y + r + this.speedY) > getBoundary(this.x, this.y).Y
        || this.y - r + this.speedY < 0 ){
        this.y = getBoundary(this.x, this.y).Y - r;
        this.speedY *= -bounceFactor;
      } else if((this.x - r + this.speedX) < 
                getBoundary(this.x, this.y).x1){
        this.speedX = 0.5*Math.random();
      } else if((this.x + r + this.speedX) > 
                getBoundary(this.x, this.y).x2){
        this.speedX = -0.5*Math.random();
      } 
      if((Math.abs(this.speedY) <= 0.1) && (cHeight-this.y <=2*r)){
        this.speedY = -2;
        this.speedX = Math.random() < 0.5? -2*Math.random(): 2*Math.random();
      }
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
      this.speedY += gravity;
    };
    
    function draw(ctx){
      ctx.beginPath();
      ctx.arc(this.x,this.y,r,0,2*Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    };
    
    function getBoundary(x, y){
      var temx = x <= CenterX? (CenterX - x) : (x - CenterX);
      var tempy = Math.sqrt(Math.pow((R), 2) - Math.pow(temx, 2));
      var by = CenterY + tempy;
      var xo = Math.sqrt(Math.pow((R-r), 2) - Math.pow((y-CenterY), 2));
      
      var b = {
        x1: CenterX - xo,
        x2: CenterX + xo,
        Y: by
      }
      return b;
    }
        
    this.draw = draw;
    this.move = move;
    return this;
  };
  
  function init(){
      for(i = 0; i <grid; i ++){
        for (j = 0; j < grid; j ++){
          x = left + (w)/(grid-1)*i;
          y = top + (h)/(grid-1)*j;
          c = (i + j)%4;
          dot = new Dot(x, y, color[c]);
          arr.push(dot);
        }
      }
    };
  
  function render(ctx){
     bContext.clearRect(0,0,cWidth, cHeight);
     bContext.beginPath();
     bContext.arc(CenterX, CenterY , R, 0,Math.PI);
     bContext.strokeStyle = "#f0f0f0";
     bContext.stroke();
      arr.forEach(function(el, index){
        el.move();
        el.draw(bContext);
      });
  }

  function draw(){
    render(bContext);
    context.clearRect(0,0,cWidth, cHeight);
    context.drawImage(buffer, 0, 0);
    window.requestAnimationFrame(draw);
  }
  init();
  window.requestAnimationFrame(draw);
  //window.setInterval(draw, 1000);
})();
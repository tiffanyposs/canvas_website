var canvas = document.getElementById("the_canvas4");
var ctx = canvas.getContext("2d");
var x = 0

var draw = function() {
  //moves square to the right
  x+=1;
  //makes sure it stays on the screen
  if(x>canvas.height){
    x=0;
  };
  var grd=ctx.createLinearGradient(0+x,0+x,300+x,600+x);
  grd.addColorStop(1,"Tomato");
  grd.addColorStop(0.3,"SkyBlue");
  grd.addColorStop(0.2, "Thistle")
  ctx.fillStyle=grd;
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

setInterval(draw, 20);

var canvas = document.getElementById('the_canvas3');
var ctx = canvas.getContext('2d');


var x = 0;

var draw = function() {

  var r = Math.floor(255*Math.random()).toString();
  var g = Math.floor(255*Math.random()).toString()
  var b = Math.floor(255*Math.random()).toString()

  ctx.fillStyle = "rgb(" + r +","+ g + "," + b +")";
  ctx.fillRect(0,0, canvas.width, canvas.height);

}

setInterval(draw, 500);

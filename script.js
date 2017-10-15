document.addEventListener("DOMContentLoaded", chngGrd);

function chngGrd(){

var color1 = 'rgb(0,0,255)';
var square = 0;
var change = 3;
var b1 = 0;
var b2 = 255;
var chkCont = document.createElement("div");
  for (var i = 0; i < 9; i++){

    //create a new array
    for (var j = 0; j < 9; j++){
    //create a div to put in an array space
    var chkBrd = document.createElement("div");
          if (square === 0){
            square = 1;
            var b1Color = `rgb(0,0,${b1})`;
            color1 = b1Color;
          }
          else {
            square = 0;
            var b2Color = `rgb(255,0,${b2})`;
            color1 = b2Color;
          }
          b1 = b1 + change;
          b2 = b2 - change;
          chkBrd.style.backgroundColor = color1;
          console.log(color1);
        chkBrd.style.width = "11.1%";
        chkBrd.style.float = "left";
        chkBrd.style.paddingBottom = "11.1%";
      chkCont.appendChild(chkBrd);

    }
  }
document.body.appendChild(chkCont);
}

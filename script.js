
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}



  for (var i = 0; i < 9; i++){
    //create a new array
    for (var j = 0; j < 9; j++){
    //create a div to put in an array space
    var chkrBrd = document.createElement("div");
    var r = getRandomInt(0,255);
    var g = getRandomInt(0,255);
    var b = getRandomInt(0,255);
    var randColor = `rgb(${r},${g},${b})`;
        chkrBrd.style.backgroundColor = randColor;

        chkrBrd.style.width = "11.1%";
        chkrBrd.style.float = "left";
        chkrBrd.style.paddingBottom = "11.1%";
      document.body.appendChild(chkrBrd);

    }

  }

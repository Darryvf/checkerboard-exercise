var color1 = "black";

  for (var i = 0; i < 9; i++){
    //create a new array
    for (var j = 0; j < 9; j++){
    //create a div to put in an array space
    var chkrBrd = document.createElement("div");
        chkrBrd.style.backgroundColor = color1;
          if (color1 === "black"){
            color1 = "red";
          }
          else {
            color1 = "black";
          }
        chkrBrd.style.width = "11.1%";
        chkrBrd.style.float = "left";
        chkrBrd.style.paddingBottom = "11.1%";
      document.body.appendChild(chkrBrd);

    }

  }

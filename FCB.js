
function runEvent() {
        var x = event.screenX;
        var y = event.clientY;
        var z = 0;
        if (x > 255 && x < (255 * 2)){x = x / 2 ;}
        else if (x > (255 * 2) && x < (255 * 3)){x = x / 3;}
        else if (x > (255 * 3) && x < (255 * 4)){x = x / 4;}
        else if (x > (255 * 4) && x < (255 * 5)){x = x / 5;}
        else if (x > (255 * 5) && x < (255 * 6)){x = x / 6;}
        else if (x > (255 * 6) && x < (255 * 7)){x = x / 7;}
        if (y > 255 && y < (255 * 2)){y = y / 2 ;}
        else if (y > (255 * 2) && y < (255 * 3)){y = y / 3;}
        else if (y > (255 * 3) && y < (255 * 4)){y = y / 4;}
        z = 0;



        console.log(y);
















    document.getElementById("w").style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
  }
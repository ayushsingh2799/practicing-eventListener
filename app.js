document.getElementById("b1").addEventListener("click",function(){
    document.getElementsByTagName("img")[1].setAttribute("src","https://i.imgur.com/Mplj1YR.png");
});
document.getElementById("b2").addEventListener("click",function(){
    document.getElementsByTagName("img")[1].setAttribute("src","https://i.imgur.com/xSIK4M8.png");
});
document.getElementById("b3").addEventListener("click",function(){
    document.getElementsByTagName("img")[1].setAttribute("src","https://i.imgur.com/PTgQlim.png");
});
document.getElementById("b4").addEventListener("click",function(){
    document.getElementsByTagName("img")[1].setAttribute("src","https://i.imgur.com/Zygu7I3.png");
});

// var today = new Date();

// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

startTime();                               //jalwa hai stackoverflow ka
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }


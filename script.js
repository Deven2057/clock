var clock = setInterval(clockTiming, 1000);
function clockTiming() {
  var d = new Date();
  var findTime = d.toLocaleTimeString();
  document.getElementById("time").innerHTML = findTime;
}

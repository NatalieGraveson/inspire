








export default class ClockController {
  time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    document.getElementById('span').innerHTML = h + ":" + m + ":" + s;
  }

  //setInterval(time, 1000)


}


  // startTime() {
  // var today = new Date();
  // var h = today.getHours();
  // var m = today.getMinutes();
  // var s = today.getSeconds();
  // m = checkTime(m);
  // s = checkTime(s);
  // document.getElementById('txt').innerHTML =
  //   h + ":" + m + ":" + s;
  // var t = setTimeout(startTime, 500);
  //}
  // checkTime(i) {
  // if (i < 10) { i = "0" + i };  
  // return i;
  //}





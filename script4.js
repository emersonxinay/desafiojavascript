var timer_tag = document.getElementById('timer');
var timer = timer_tag.innerHTML;
timer = parseInt(timer);

var time = setInterval(countDown, 1000);
function countDown(){
      timer = timer - 1
        timer_tag.innerHTML = timer
  if (timer == 0 ) {
    myStopFuntion()
    document.getElementById("text").innerHTML ="BOOM"
    document.body.style.backgroundColor = "red"
  }

  }


function myStopFuntion(){
  clearInterval(time);
}

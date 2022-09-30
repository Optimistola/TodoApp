import React from "react";
function TodoClock(props){
  var x = setInterval(function(){
    var Time= document.getElementById("date");
  var todayDate =Time.value;
    var countdown = new Date(todayDate).getTime();
    var now = new Date().getTime();
    var distance = countdown - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 24)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (distance > 0) {
    
//days +  " " +"days" + hours+ " "+ "hours" +" " + minutes+ " " + "minutes" + " " +seconds + "seconds";

  
  }
  
  //if (distance < 0) {
  //  clock.innerHTML="your time Expired";
//}
},1000);

return(
  <div>
  <input type="datetime-local" id="date" className="input"/>
  <span id="clock2" ></span>
  </div>
  );
}

  export default TodoClock

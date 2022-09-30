import React from "react";
function ClockApp(){
 setInterval( function (){
  let todayDate= new Date();
  let Hour=todayDate.getHours();
  let Minute=todayDate.getMinutes();
  let Seconds=todayDate.getSeconds();
  let session ="AM";
  if(Hour>12){
    session="PM";
    Hour=Hour-12;
  }
  Hour= Hour<10? "0" +Hour : Hour;
  Minute=Minute<10? "0" +Minute : Minute;
  Seconds=Seconds<10? "0" +Seconds : Seconds;
  
  document.getElementById("clock").innerHTML=("Current Time:"+ Hour+":"+Minute+ ":" +Seconds+ " " +session);
}, 1000);

return(
  <strong>
  <div id="clock"></div>
  </strong>
  );
}
  export default ClockApp

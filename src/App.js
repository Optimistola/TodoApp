import logo from './logo.svg';
import './App.css';
import React, {component, useState} from "react";
import {FaPlus} from"react-icons/fa";
import Header from "./Components/TodoHeader";
import DoingTodo from "./Components/Doing";
import FormTodo from "./Components/TodoForm";
import ClockApp from "./Components/Clock"
import TodoClock from "./Components/TodoClock";
function App(){
  const [value, setValue] =useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    setValue("");
   
 var TodoText=  document.createElement("input");
 TodoText.style.marginButton="10px";
 var DoingDiv=document.createElement("div");
 DoingDiv.classList.add("doing-div")
 var BtnMark= document.createElement("button");
 var BtnCancle =document.createElement("button");
 BtnCancle.classList.add("btncancle");
  BtnMark.classList.add("btn");
TodoText.value=value;
BtnMark.innerHTML="✓";
BtnCancle.innerHTML="✕";
let clock= document.createElement("p");
var Time= document.getElementById("date");
  var todayDate =Time.value;
  let DoneDiv=document.createElement("div");
  let Done= document.getElementById("done");
var x = setInterval(function(){
    var countdown = new Date(todayDate).getTime();
    var now = new Date().getTime();
    var distance = countdown - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 24)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (distance > 0) {
    
 clock.innerHTML= days +  " " +"days" + " "+ hours+ " "+ "hours" +" " + minutes+ " " + "minutes" + " " +seconds + "seconds left";
  
  }
  
  if (distance < 0) {
    clock.innerHTML="Your Todo Time Expired, Done?";
    
}
},1000);

BtnMark.onclick=()=>{
  TodoText.style.textDecoration="line-through";
  

  DoneDiv.classList.add("done-div");
  let DoneText= document.createElement("p");
  DoneDiv.appendChild(TodoText);
  clock.remove();
  DoneDiv.appendChild(BtnCancle);
  Done.appendChild(DoneDiv);
  BtnMark.remove();
 }
 BtnCancle.onclick=()=>{
   TodoText.remove();
   BtnMark.remove();
   BtnCancle.remove();
   clock.remove();
 }
 var parent= document.getElementById("parent");
DoingDiv.appendChild(TodoText);
DoingDiv.appendChild(BtnMark);
DoingDiv.appendChild(BtnCancle);
parent.appendChild(clock);
parent.appendChild(DoingDiv);

  }
  

return(
   <div className="container">
    <Header/>
 <br/> <br/> <br/> <br/> <br/> <br/>
    <form onSubmit={handleSubmit}> 
    <ClockApp/>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo..." />
        <TodoClock/>
    <button type="submit" className="btnlg">
      AddTodo 
    </button>
  </form>
  <div id="parent">
<DoingTodo/>
  </div>
  <div id="done">
  <h3 className="done">Done</h3>
  </div>
      </div>
   );
}
export default App

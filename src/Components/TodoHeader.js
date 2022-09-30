import {useState} from "react";
import{FiSun, FiMoon} from "react-icons/fi";
import {FaPlus} from"react-icons/fa";
function Header(){
  const [darkMode, setDarkMode]=useState(false);
  function HandleMode(){
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  }
 return (
   <header>
     <nav>
       <div>
        <p className="navBranding">My Todo</p>
      </div>
        <div className="headerIcons">
         <div>
          <p> <span className="darkIcon" onClick={HandleMode}>{ darkMode?<FiSun/>:<FiMoon/>}</span>
          <span className="modeToggle">{darkMode? " Light":" Dark"}</span>
         </p>
         </div>
           
      </div>
   </nav>
   </header>
 )
}
export default Header;
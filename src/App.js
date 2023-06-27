import React, { useState } from "react";

import { FaFacebook } from "react-icons/fa";
import { GrRefresh } from "react-icons/gr";
import { SiGmail } from "react-icons/si";


import Technology from "./components/Technology";
import GlobalState from "./components/GlobalState";
import Shift_selection from "./components/Shift_selection";
import Semester from "./components/Semester";
import ShowRoutine from "./components/ShowRoutine";
import Footer from "./components/Footer";
import logo from './images/logo.jpg'
import Group from "./components/Group";

let refreshColor = localStorage.getItem("color");
let refreshBgColor = localStorage.getItem("bg");




function App() {
  const [first, setfirst] = useState(true);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false)
  const [fourth, setfourth] = useState(false)
  const [isGroup, setisGroup] = useState(false)
  const [showGroup, setshowGroup] = useState(false)
  const [routinePath, setroutinePath] = useState('')
  const [routineHead, setroutineHead] = useState('')
  const [rotate, setrotate] = useState({ transform: "" });

  
  const [color, setcolor] = useState({color: refreshColor})
  const [bg, setbg] = useState({backgroundColor: refreshBgColor})
  


  return (
    <>
      <GlobalState.Provider
        value={{ first, setfirst, second, setsecond, third, setthird, fourth, setfourth, isGroup, setisGroup, routinePath,setroutinePath,color, setcolor, bg, setbg, rotate, setrotate, routineHead, setroutineHead, showGroup, setshowGroup  }}
      >
        <div className="cap1">
          <div className="image">
            <img src={logo} alt="logo" />
            <div>
              <h1>Bogra Polytechnic Institute.</h1><br />
              <h1>Class Routine</h1>
            </div>
          </div>
          <h4 className="warning">Refresh the page to select Technology.</h4>
          <button style={{background: "transparent", border: 'none', borderRadius: "4rem"}} onClick={()=> window.location.reload()}><GrRefresh className="r-icon" /></button>
        </div>
        
        
        {first ? <Technology /> : null}
        {second ? <Shift_selection /> : null}
        {third ? <Semester /> : null}
        {showGroup ? <Group />: null}
        {fourth ? <ShowRoutine /> : null}
        <div className="icon-section">
          <h1 className="gradient__text">For any correction in routine knock me.</h1>
          <div className="icon">
            <a 
            href="https://www.facebook.com/profile.php?id=100027012382655"
            target="blank"><FaFacebook className="f-icon" />
            </a>
            <a 
            href="mailto:absabur929@gmail.com"
            target="blank"><SiGmail className="g-icon" />
            </a>
          </div>
        </div>
        <Footer />
      </GlobalState.Provider>
    </>
  );
}

export default App;

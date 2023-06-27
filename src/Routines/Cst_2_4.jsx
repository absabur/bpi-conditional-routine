import React, { useContext } from "react";
import CustomColor from "./Styling/CustomColor";
import GlobalState from "../components/GlobalState";
import { GiTireIronCross } from "react-icons/gi";
import Rotate from "./Styling/Rotate";
import Period from "./CommonPartTable/Period";
import TimeDuration from "./CommonPartTable/TimeDuration";

const Cst_2_4 = () => {
  const { color, bg, rotate, routineHead } = useContext(GlobalState);

  return (
    <div className="main">

      <CustomColor />
      <Rotate />
      
      <div style={bg} className="cap">
        <p style={color}>{routineHead}</p>
      </div>

      <div className="table" style={rotate}>

        <Period />
        <TimeDuration />

        <div className="row">
            <div className="p1 p" style={bg}>
                <p style={color}>SUNDAY</p>
            </div>
            <div className="p3 p" style={bg}>
                <p style={color}>Digital Electronics-I <br />
                Room: 31</p>
            </div>
            <div className="p1 p" style={bg}>
                <p style={color}>IT Suppurt Services <br />
                Room: 130</p>
            </div>
            <div className="p1 p" style={bg}>
                <p style={color}> Application Development Using Python <br />
                Room: 130</p>
            </div>
            <div className="p2 p" style={bg}>
                <p style={color}>Physics-II <br />
                Room: 1306</p>
            </div>
        </div>

        <div className="row">
            <div className="p1 p" style={bg}>
                <p style={color}>MONDAY</p>
            </div>
            <div className="p3 p" style={bg}>
                <p style={color}>Computer Graphics Design-II <br />
                Room: Apps Lab</p>
            </div>
            <div className="p1 p" style={bg}>
                <p style={color}>Physics-II <br />
                Room: 1208</p>
            </div>
            <div className="p3 p" style={bg}>
                <p style={color}>Application Development Using Python <br />
                Room: 1208</p>
            </div>
        </div>

        <div className="row">
            <div className="p1 p" style={bg}>
                <p style={color}>TUESDAY</p>
            </div>
            <div className="p3 p" style={bg}>
                <p style={color}>Physics-II <br />
                Room: 304/301</p>
            </div>
            <div className="p1 p" style={bg}>
                <p style={color}> Digital Electronics-I <br />
                Room: 1308</p>
            </div>
            <div className="p1 p" style={bg}>
                <p style={color}>IT Suppurt Services <br />
                Room: 1404</p>
            </div>
            <div className="p1 p" style={bg}>
                <p style={color}>Mathematics-III <br />
                Room: 1404</p>
            </div>
            <div className="p1 p" style={bg}>
                <p style={color}><GiTireIronCross /></p>
            </div>
        </div>

        
        <div className="row">
            <div className="p1 p" style={bg}>
                <p style={color}>WEDNESDAY</p>
            </div>
            <div className="p3 p" style={bg}>
                <p style={color}>IT Suppurt Services <br />
                Room: Apps Lab</p>
            </div>
            <div className="p1 p" style={bg}>
                <p style={color}>Application Development Using Python <br />
                Room: Apps Lab</p>
            </div>
            <div className="p1 p" style={bg}>
                <p style={color}>Mathematics-III <br />
                Room: 1304</p>
            </div>
            <div className="p2 p" style={bg}>
                <p style={color}> <GiTireIronCross /></p>
            </div>
        </div>

        
        <div className="row">
            <div className="p1 p" style={bg}>
                <p style={color}>THURSDAY</p>
            </div>
            <div className="p1 p" style={bg}>
                <p style={color}>Digital Electronics-I <br />
                Room: 1104</p>
            </div>
            <div className="p2 p" style={bg}>
                <p style={color}>Social Science <br />
                Room: 1104</p>
            </div>
            <div className="p1 p" style={bg}>
                <p style={color}>Mathematics-III <br />
                Room: 1305</p>
            </div>
            <div className="p3 p" style={bg}>
                <p style={color}>Mathematics-III <br />
                Room: 1305</p>
            </div>
        </div>


      </div>
    </div>
  );
};


export default Cst_2_4
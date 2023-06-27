import React, { useContext } from "react";

import GlobalState from "./GlobalState";
import Footer from "./Footer";

const Technology = () => {
  const { first, setfirst, second, setsecond, routinePath, setroutinePath, routineHead, setroutineHead, isGroup, setisGroup} =
    useContext(GlobalState);

  const handleSub = (e, sub) => {
    setfirst(!first);
    setsecond(!second);
    setroutinePath(routinePath+sub)
    setroutineHead(routineHead+e+', ')
    if (sub == "mt" || sub == "et") {
      setisGroup(!isGroup)
    }
  };

  return (
    <>
    
      <div className="nav_display">
      <h1 className="head">Select Your Technology</h1>
        <button onClick={() => handleSub("Computer Science and Technology" ,"cst")}>
          <h3>Computer Science and Technology</h3>
        </button>
        <button onClick={() => handleSub("Electrical Technology","et")}>
          <h3>Electrical Technology</h3>
        </button>
        <button onClick={() => handleSub("Computer Technology","cmt")}>
          <h3>Computer Technology</h3>
        </button>
        <button onClick={() => handleSub("Civil Technology","ct")}>
          <h3>Civil Technology</h3>
        </button>
        <button onClick={() => handleSub("Mechanical Technology","mt")}>
          <h3>Mechanical Technology</h3>
        </button>
        <button onClick={() => handleSub("Power Technology","pt")}>
          <h3>Power Technology</h3>
        </button>
        <button onClick={() => handleSub("Refrigeration & Air Conditioning Technology","rac")}>
          <h3>Refrigeration & Air Conditioning Technology</h3>
        </button>
        <button onClick={() => handleSub("Electronics Technology","ent")}>
          <h3>Electronics Technology</h3>
        </button>
        <button onClick={() => handleSub("Mining Technology","mnt")}>
          <h3>Mining Technology</h3>
        </button>
        <button onClick={() => handleSub("Tourism and Hospitality","th")}>
          <h3>Tourism and Hospitality</h3>
        </button>
      </div>
    </>
  );
};

export default Technology;

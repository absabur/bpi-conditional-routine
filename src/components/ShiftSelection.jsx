import React, { useContext } from "react";
import GlobalState from "./GlobalState";

const Shift_selection = () => {
  const { setsecond, second, third, setthird, routinePath, setroutinePath,routineHead, setroutineHead } = useContext(GlobalState);
  const handleShift = (e, shift) => {
    setsecond(!second);
    setthird(!third)
    setroutinePath(routinePath+shift)
    setroutineHead(routineHead+e+', ')
  };
  return (
    <>
      <div className="space"></div>
      
      <div className="nav_display">
      <h1 className="head">Select Shift</h1>
        <button onClick={() => handleShift("First Shift","1st")}>
          <h3>First Shift</h3>
        </button>
        <button onClick={() => handleShift("Second Shift","2nd")}>
          <h3>Second Shift</h3>
        </button>
      </div>
      <div className="space"></div>
    </>
  );
};

export default Shift_selection;

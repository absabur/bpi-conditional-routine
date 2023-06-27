import React from "react";
import { Link } from "react-router-dom";

import { ImHome } from "react-icons/im";
import GlobalState from "./GlobalState";
import { useContext } from "react";

const Home = () => {
    const {setfirst, setsecond, setthird, setfourth, setisGroup, setshowGroup } = useContext(GlobalState)
    const handleClick = () => {
        setfirst(true)
        setsecond(false)
        setthird(false)
        setfourth(false)
        setisGroup(false)
        setshowGroup(false)
    }
  return (
    <div className="" style={{ marginBottom: "1rem" }}>
      <Link onClick={handleClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding:"7rem 0",
          marginBottom:"-2rem",
          backgroundColor:"white",
          borderRadius:"10px"
        }}
        to="/technology"
      >
        <h1 style={{ color:"#598ac2"}}>Get Routine</h1>
      </Link>
    </div>
  );
};

export default Home;

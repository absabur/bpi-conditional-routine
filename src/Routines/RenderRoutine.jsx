import React, { useContext } from 'react';

import Cst12 from "./Cst_1_2";
import Cst14 from "./Cst_1_4";
import Cst16 from "./Cst_1_6";
import Cst22 from "./Cst_2_2";
import Cst24 from "./Cst_2_4";
import Cst26 from "./Cst_2_6";

import Cmt12 from "./Cmt_1_2";
import Cmt14 from "./Cmt_1_4";
import Cmt16 from "./Cmt_1_6";
import Cmt22 from "./Cmt_2_2";
import Cmt24 from "./Cmt_2_4";
import Cmt26 from "./Cmt_2_6";

import GlobalState from '../components/GlobalState';
import "./Styling/routine.css";


const RenderRoutine = () => {
    const {routinePath, routineHead} = useContext(GlobalState)
    

    const renderRoutine = () => {
        if (routinePath === "cst1st2nd") {
          return <Cst12 />
        }else if (routinePath === "cst1st4th") {
          return <Cst14 />
        }else if (routinePath === "cst1st6th") {
          return <Cst16 />
        }else if (routinePath === "cst2nd2nd") {
          return <Cst22 />
        }else if (routinePath === "cst2nd4th") {
          return <Cst24 />
        }else if (routinePath === "cst2nd6th") {
          return <Cst26 />
        }else if (routinePath === "cmt1st2nd") {
          return <Cmt12 />
        }else if (routinePath === "cmt1st4th") {
          return <Cmt14 />
        }else if (routinePath === "cmt1st6th") {
          return <Cmt16 />
        }else if (routinePath === "cmt2nd2nd") {
          return <Cmt22 />
        }else if (routinePath === "cmt2nd4th") {
          return <Cmt24 />
        }else if (routinePath === "et2nd2ndc") {
          return <Cmt26 />
        }else{
          return (
            <div>
              <div className='space'></div>
              <h6 style={{padding: "1rem", textAlign: "center", fontSize: "24px", fontWeight: "600"}}>Routine can not find. <br />({routineHead})<br /> is not exists.</h6>
              <div className='space'></div>
            </div>
          )
        }
      }
  return (
    <div>
        {
            renderRoutine()
        }
    </div>
  )
}

export default RenderRoutine
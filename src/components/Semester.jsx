import React, { useContext } from 'react'
import GlobalState from './GlobalState'
import Footer from './Footer'

const Semester = () => {

    const {third, setthird, fourth, setfourth, routinePath, setroutinePath, routineHead, setroutineHead, isGroup, showGroup, setshowGroup} = useContext(GlobalState)
    const handleSemester = (e,semester) => {
        setthird(!third)
        if (isGroup === true) {
          setshowGroup(!showGroup)
        }else {
          setfourth(!fourth)
        }
        setroutinePath(routinePath+semester)
        setroutineHead(routineHead+e +", ")
    }
  return (
    <>
    
      <div className="space"></div>
      <div className='nav_display'>
      <h1 className="head">Select Semester</h1>
            <button onClick={() => handleSemester("2nd Semester","2nd")}><h3>2nd Semester</h3></button>
      
            <button onClick={() => handleSemester("4th Semester","4th")}><h3>4th Semester</h3></button>
    
            <button onClick={() => handleSemester("6th Semester","6th")}><h3>6th Semester</h3></button>
      </div>
      <div className="space"></div>
    </>
  )
}

export default Semester
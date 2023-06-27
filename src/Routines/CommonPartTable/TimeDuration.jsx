import React from 'react'
import { useContext } from 'react';
import GlobalState from '../../components/GlobalState';

const TimeDuration = () => {
    
  const { color, bg } = useContext(GlobalState);
  return (

    <div className="row">
        <div className="p1 h" style={bg}>
            <p style={color}>DAY / TIME</p>
        </div>
        <div className="p1 h" style={bg}>
            <p style={color}>1:30-2:15</p>
        </div>
        <div className="p1 h" style={bg}>
            <p style={color}>2:15-3:00</p>
        </div>
        <div className="p1 h" style={bg}>
            <p style={color}>3:00-3:45</p>
        </div>
        <div className="p1 h" style={bg}>
            <p style={color}>3:45-4:30</p>
        </div>
        <div className="p1 h" style={bg}>
            <p style={color}>4:30-5:15</p>
        </div>
        <div className="p1 h" style={bg}>
            <p style={color}>5:15-6:00</p>
        </div>
        <div className="p1 h" style={bg}>
            <p style={color}>6:00-6:45</p>
        </div>
    </div>
  )
}

export default TimeDuration
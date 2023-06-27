import React from 'react'
import { useContext } from 'react';
import GlobalState from '../../components/GlobalState';

const Period = () => {
    
  const { color, bg } = useContext(GlobalState);
  return (
    <div className="row">
      <div className="p1 h" style={bg}>
          <p style={color}>Period</p>
      </div>
      <div className="p1 h" style={bg}>
          <p style={color}>1st</p>
      </div>
      <div className="p1 h" style={bg}>
          <p style={color}>2nd</p>
      </div>
      <div className="p1 h" style={bg}>
          <p style={color}>3rd</p>
      </div>
      <div className="p1 h" style={bg}>
          <p style={color}>4th</p>
      </div>
      <div className="p1 h" style={bg}>
          <p style={color}>5th</p>
      </div>
      <div className="p1 h" style={bg}>
          <p style={color}>6th</p>
      </div>
      <div className="p1 h" style={bg}>
          <p style={color}>7th</p>
      </div>
  </div>
  )
}

export default Period
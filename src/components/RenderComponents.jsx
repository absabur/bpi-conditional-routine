import React from 'react'
import { useContext } from 'react'
import GlobalState from './GlobalState'
import Technology from './Technology'
import Shift_selection from './Shift_selection'
import Semester from './Semester'
import Group from './Group'
import ShowRoutine from './ShowRoutine'

const RenderComponents = () => {
    
    const {first, second, third, fourth, showGroup } = useContext(GlobalState)
  return (
    <div>        
        {first ? <Technology /> : null}
        {second ? <Shift_selection /> : null}
        {third ? <Semester /> : null}
        {showGroup ? <Group />: null}
        {fourth ? <ShowRoutine /> : null}
    </div>
  )
}

export default RenderComponents
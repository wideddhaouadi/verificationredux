import React from 'react'
import { useSelector } from 'react-redux'
import Todotask from './Tdotask'

function Todolist() {
    const state=useSelector(state=>state)

     
  return (
    <div>
      {state && state.tasks.map(el=><Todotask el={el} key={el.id}/>)}
    </div>
  )
}

export default Todolist
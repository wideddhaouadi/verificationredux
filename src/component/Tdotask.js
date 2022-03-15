import React from 'react'

function Todotask({el}) {
  
  return (
    <div>
        <span>{el.text}</span>
        <button>delete</button>
        <button>EDIT</button>
        <button>DONE</button>
    </div>
  )
}

export default Todotask
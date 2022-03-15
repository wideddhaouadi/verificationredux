import React,{useState} from 'react'
import { useDispatch } from 'react-redux'

import { addition } from '../JS/Action'
function Header() {

    const [text, setText] = useState("")

    const dispatch=useDispatch()

  return (
    <div>
<input type='text' onChange={(e)=>setText(e.target.value)}  />
<button onClick={()=>dispatch(addition({text:text, id:Math.random(), isDone:false}))} >add</button>

    </div>
  )
}

export default Header
import React from 'react'
import '../App.css'
import { useState } from 'react'

const Numbers = ({data,formData,setFormData}) => {
  const [formNumberInput,setFormNumberInput] = useState("")

    const {type,id,label} = data
    const handleNumberInput = (event)=>{
      setFormNumberInput(event.target.value)
      const result = formData.map(each=>id===each.id?{...each,value:formNumberInput}:each)
      setFormData(result)
    }
  return (
    <div>
      <label htmlFor={id}>{label}</label><br/>
      <input type={type} id={id} required className='textInput' onChange={handleNumberInput}/>
    </div>
  )
}

export default Numbers

import React from 'react'
import '../App.css'
import { useState } from 'react'

const Text = ({data,formData,setFormData}) => {
  const [formText, setFormText] = useState("")

    const {label,type,id} = data
    const handleTextInput = (event)=>{
      setFormText(event.target.value)
      const result = formData.map(each=>id===each.id?{...each,value:formText}:each)
      setFormData(result)
    }
  return (
    <div>
      <label htmlFor={id}>{label}</label><br/>
      <input type={type} id={id} required className='textInput' onChange={handleTextInput}/>
    </div>
  )
}

export default Text

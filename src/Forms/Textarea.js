import React from 'react'
import '../App.css'
import { useState } from 'react'

const Textarea = ({data,formData,setFormData}) => {
  const [formTextArea, setFormTextArea] = useState("")

    const {type,label,id} = data
    const handleTextArea = (event)=>{
      setFormTextArea(event.target.value)
      const result = formData.map(each=>id===each.id?{...each,value:formTextArea}:each)
      setFormData(result)
    }
  return (
    <div>
      <label>{label}</label><br/>
      <textarea type="text" rows="5" cols="40" required onChange={handleTextArea}></textarea>
    </div>
  )
}

export default Textarea

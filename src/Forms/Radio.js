import React from 'react'
import '../App.css'
import { useState } from 'react'

const Radio = ({data,formData,setFormData}) => {
    const {label,id,type,choicesDetails} = data
    const [selectedOption, setSelectedOption] = useState('')
    const handleCheckBoxChange=(value)=>{
      setSelectedOption(value)
      const result = formData.map(each=>id===each.id?{...each,value:selectedOption}:each)
      setFormData(result)
  }
    return (
      <div>
          <label htmlFor={id}>{label}</label><br/>
          {choicesDetails.map((each,index)=>
          <div>
          <input type={type} id={label} name={id} checked={selectedOption===each} onChange={()=>handleCheckBoxChange(each)}/>
          <label htmlFor={label}>{each}</label>
          </div>
              
          )}
  
        
      </div>
    )
}

export default Radio

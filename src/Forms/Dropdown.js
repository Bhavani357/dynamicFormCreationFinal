import React from 'react'
import '../App.css'
import { useState } from 'react'

function Dropdown({data,formData,setFormData}) {
    const {label,id,choicesDetails} = data
    const [selectedOption, setSelectedOption] = useState('')

    const onSelectValue = (event)=>{
      setSelectedOption(event.target.value)
      const result = formData.map(each=>id===each.id?{...each,value:selectedOption}:each)
      setFormData(result)
  }

    return (
      <div>
          <label htmlFor={id}>{label}</label><br/>
          <select className='textInput' onChange={onSelectValue}>
            <option>Click to select</option>
          {choicesDetails.map((each,index)=>
          <option>{each}</option>
          )}
          </select>
  
        
      </div>
    )
}

export default Dropdown

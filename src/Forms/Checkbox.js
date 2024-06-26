import React from 'react'
import '../App.css'
import { useState } from 'react'

function Checkbox({data,formData,setFormData}) {
    const {label,id,type,choicesDetails} = data
    const [checkedItems, setCheckedItems] = useState({})
    const [selectedCheckBox, setSelectedCheckbox] = useState([])
    const handleCheckBoxChange=(each)=>{
      const updatedCheckedItems = {...checkedItems,[each]: !checkedItems[each]}
      setCheckedItems(updatedCheckedItems)
      choicesDetails.filter(each=>{
          if(checkedItems[each]===true){
              setSelectedCheckbox([...selectedCheckBox,each])
          }
  })
  const result = formData.map(eachObj=>id===eachObj.id?{...eachObj,value:selectedCheckBox}:eachObj)
  setFormData(result)
  }

  return (
    <div>
        <label htmlFor={id}>{label}</label><br/>
        {choicesDetails.map((each,index)=>
        <div>
        <input type={type} id={label} checked={checkedItems[each] || false} onChange={()=>handleCheckBoxChange(each)}/>
        <label htmlFor={label}>{each}</label>
        </div>
            
        )}

      
    </div>
  )
}

export default Checkbox

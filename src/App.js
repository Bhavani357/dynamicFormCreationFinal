import './App.css';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import Form from './components/Form';

const App = ()=>{
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isChoicesDisplay, setIsChoicesDisplay] = useState(false);
  const [labelName, setLabelName] = useState("")
  const [formData, setFormData] = useState([])
  const [choices, setChoices] = useState("")
  const [choicesDetails, setChoicesDetails] = useState([])
  const [isLabelNameEmpty, setLabelNameEmpty] = useState(false)
  const [choicesError, setChoicesError] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("");


  const handleAddToFormButton = ()=>{

    if(labelName === ""){
      setLabelNameEmpty(true)
      return;
    }
    if (isChoicesDisplay && choicesDetails.length < 2) {
      setChoicesError(true);
      return
    }
    
    const formObj = {
      id: uuidv4(),
      type:selectedComponent,
      label: labelName,
      choicesDetails: choicesDetails,
      value:null
    }
    
    setFormData([...formData,formObj])
    setChoices("")
    setLabelName("")
    setChoicesDetails([])
    setLabelNameEmpty(false)
    setChoicesError(true)
  }

 const onAddChoices = ()=>{
  if(choices === ""){
    setChoicesError(true)
    return;
  }
  
    setChoicesDetails([...choicesDetails,choices])
    setChoicesError(false)
    setChoices("")
 }

 const renderLabel = ()=>
    <div>
      
      <label>Enter label type</label><br/>
      <input type="text" onChange={(event)=>setLabelName(event.target.value)}  value={labelName} className='textInput'/>
      {isLabelNameEmpty&&<p className='errormsg'>Enter label name</p>}
    </div>

  const addChoices = ()=>
    <div>
      <input type="text" onChange={(event)=>setChoices(event.target.value)} value={choices} className='textInput'/>
      <button onClick={onAddChoices} className='button'>Add Choices</button>
      {/* {choicesError&&<p className='errormsg'></p>} */}
      {choicesError && choicesDetails.length < 2 && <p className='errormsg'>Add at least two choices</p>} 

      {choicesDetails.map((each,index)=>
        (<li key={index}>{each}</li>)
        )}
      
    </div>
  const onSelectHandler = (event) => {
    setSelectedComponent(event.target.value);
    switch (event.target.value) {
      case "text":
      case "number":
      case "textarea":
        setIsChoicesDisplay(false);
        break;
      case "checkbox":
      case "dropdown":
      case "radio":
        setIsChoicesDisplay(true);
        break;
      
        
    }
  }
  const handleFormSubmittion = (event)=>{
    event.preventDefault()
    console.log(formData)
    setSubmitMessage("Check Console for form data"); // Set submit message

    // Clear the message after 2 seconds
    setFormData([])
    setTimeout(() => {
      setSubmitMessage("");
    }, 2000);

  }
  
  return(
    <div>
    <h1 className='heading'>React Dynamic Forms</h1>
    <div className='top-container'>
    <div className='left-container'>
          <select className='selectElement' onChange={onSelectHandler}>
            <option value="select from below">Select from below</option>
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="textarea">Textarea</option>
            <option value="dropdown">Dropdown</option>
            <option value="checkbox">Checkbox</option>
            <option value="radio">Radio</option>
          </select>
          {selectedComponent && <div>{renderLabel()}
          
          {isChoicesDisplay  && addChoices()}
        <button onClick={handleAddToFormButton} className='button'>Add to form</button></div>}

          </div>
          
          <div>
            <form onSubmit={handleFormSubmittion}>
            {formData.map((each)=><Form eachData={each} key={each.id} formData={formData} setFormData={setFormData}/>)}
            {formData.length>0 &&<button type='submit' className='button'>Submit</button>}
            </form>
            {submitMessage && <p className='errormsg'>{submitMessage}</p>}
            


          </div>

          

          </div>
      </div>
  )
  
    
}

export default App

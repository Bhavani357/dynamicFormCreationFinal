import Text from "../Forms/Text"
import Textarea from "../Forms/Textarea"
import Radio from "../Forms/Radio"
import Dropdown from "../Forms/Dropdown"
import Numbers from "../Forms/Numbers"
import Checkbox from "../Forms/Checkbox"

const Form = (props)=>{
    const {eachData,formData,setFormData} = props
    const {id,label,type,choicesDetails} = eachData 
    
    switch (type){
        case "text":
            return <Text formData={formData} data={eachData} setFormData={setFormData}/>
        case "number":
            return <Numbers formData={formData} data={eachData} setFormData={setFormData}/>
        case "textarea":
            return <Textarea formData={formData} data={eachData} setFormData={setFormData}/>
        case "checkbox":
            return <Checkbox formData={formData} data={eachData} setFormData={setFormData}/>
        case "radio":
            return <Radio formData={formData} data={eachData} setFormData={setFormData}/>
        case "dropdown":
            return <Dropdown formData={formData} data={eachData} setFormData={setFormData}/>
    }
}
export default Form
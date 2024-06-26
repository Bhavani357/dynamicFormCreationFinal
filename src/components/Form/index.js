const Form = (props)=>{
    const formDetails = props
    const {type,label} = formDetails
    return(
        <div>
            <form>
                <label>{label}</label>
                <input type={type}/>
                <button>Submit</button>
            </form>
            
            
        </div>
    )
}
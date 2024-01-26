import "./App.css"
import { useState } from "react";

const Displayname = ()=>{

  const [issubmit , setIsSubmit]=useState(false);
  const[inputs , setInputs]=useState({
    firstname: "",
    lastname :""
  });

  const handleChange =(event)=>{
    const name = event.target.name;
    const value = event.target.value;

    setInputs( values => ({...values ,[name]:value})); 

  }

  const handleSubmit =(event)=>{
    event.preventDefault();
    setIsSubmit(true);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      <div className="container">
        <div>
        <label htmlFor="firstname">First Name:</label>
        <input 
        type="text"  
        required 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="lastname">Last Name:</label>
        <input type="text" required name="lastname"value={inputs.lastname} 
        onChange={handleChange}/>
        </div>
      
      </div>
      <button type="submit">Submit</button>
      </form>

      {issubmit && <p>Full Name: {inputs.firstname+" "+inputs.lastname}</p>}

    </div>
  )
}

export default Displayname;
import { useState } from "react"

export const FormWithValid = () => {
    const [formdata, setForm] = useState({
        email:"",
        phone:"",
        veehicle:""
    })
    const [errors, setErrors] = useState({})
    
    function handleForm(e){
 const {name, value} = e.target;
 setForm({...formdata, [name]:value})

 let newerrors = {...errors}
 if(name === "email"){
    let emailreg = /nvnv/;
    newerrors.email = emailreg.test(value) ? "" : "email error"
 }
  if(name === "phone"){
    newerrors.phone = formdata.phone.length < 10 ? "" : "phone error"
 }
  if(name === "veehicle"){
    let vehcilete = /nvnv/;
    newerrors.veehicle = vehcilete.test(value) ? "" : "vehicle error"
 }
 setErrors(newerrors)
    }

 return(
    <>
    <input type="text" name="email" onChange={handleForm}/><p>{errors.email}</p>
    <input type="text" name="phone" onChange={handleForm}/><p>{errors.phone}</p>
    <input type="text" name="vehicle" onChange={handleForm}/><p>{errors.veehicle}</p>
    </>
 )
}
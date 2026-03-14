import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import { InputField } from "./formComponents/InputField"
import { useContext, useState } from "react"
import { add2whelInsForDet } from "../api/apiService"
import { AuthContext } from "../utils/Context"

export const TwoWheelerInsuranceQuoteForm = () => {
    const navigate = useNavigate()
    const {isChecked, setIschecked} = useContext(AuthContext)
    const [vehicleNum, setVehiclenum] = useState("");
    const [mobileNum, setmobilenum] = useState("");
    const [email, setEmail] = useState("");

    function handleGetQuote(e){
        e.preventDefault();
     
     if(!vehicleNum || !mobileNum || !email || !isChecked ){
        alert("Please fill all the details")
     }else{
      try{
         const alldetails = {
          vehicleNum,
          mobileNum,
          email
    }
     add2whelInsForDet(alldetails)
     alert("Plz check your quotes")
     navigate("/selectplans")
      }catch(err){
         console.log(err)
      }
      }

    }
    return(
        <form onSubmit={handleGetQuote}>
             <InputField type="text" placeholder="Vehicle registration number" value={vehicleNum}
             onChange={(e) => setVehiclenum(e.target.value)}/><br/><br/>
             <InputField type="number" inputMode = "numeric" pattern="[0-9]" placeholder="Mobile number"
             value={mobileNum} onChange={(e) => setmobilenum(e.target.value)}/><br/><br/>
             <InputField type="email" placeholder="Email" value={email}
             onChange={(e) => setEmail(e.target.value)}/><br/><br/>
             <Button buttontext="Get Quote" type="submit"/><br/><br/>
             <InputField type="checkbox" checked={isChecked} onChange={(e) => setIschecked(e.target.checked)}/> <span> I agree to the terms and conditions</span>
        </form>
    )
}
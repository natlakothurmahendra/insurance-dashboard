import { Button } from "./Button"
import { InputField } from "./formComponents/InputField"

export const TwoWheelerInsuranceQuoteForm = () => {
    return(
        <form>
             <InputField type="text" placeholder="Vehicle registration number"/><br/><br/>
             <InputField type="number" inputMode = "numeric" pattern="[0-9]" placeholder="Mobile number"/><br/><br/>
             <InputField type="email" placeholder="Email"/><br/><br/>
             <Button buttontext="Get Quote" onClick={() => alert("just checking the chnages")}/><br/><br/>
             <InputField type="checkbox"/> <span> I agree to the terms and conditions</span>
        </form>
    )
}
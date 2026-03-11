import { Spolight } from "../../../components/spotlight/Spolight"
import main_spotlight from "@/assets/images/main_spotlight.png"
import { useNavigate } from "react-router-dom"
export const Cisco_intelligent_branch = () =>{
    const navigate = useNavigate()

    function clicktheclick(){
     navigate("/solution_listing")
    }
    return(
        <>
        <Spolight src={main_spotlight} alt={main_spotlight} h3Text="Find a fast route to value"
        pText="Power your network with secure and reliable experiences for campus, branch, edge, and data center."
        btnText="View Infographic" onClick={clicktheclick}/>
        </>
    )
}

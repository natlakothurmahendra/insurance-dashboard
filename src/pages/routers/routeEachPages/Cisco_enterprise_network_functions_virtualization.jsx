import { useNavigate } from "react-router-dom"
import { Spolight } from "../../../components/spotlight/Spolight"
import cisco_enterprise_network from "@/assets/images/cisco_enterprise_network.png"
export const Cisco_enterprise_network_functions_virtualization = () =>{
    const navigate = useNavigate()
    function clicktheclick(){
     navigate("/solution_listing")
    }
    return(
        <>
        <Spolight src={cisco_enterprise_network} alt="cisco" h3Text="Accelerate network services deployment and management"
        pText="Cisco Enterprise NFV addresses requirements for deploying virtualized network and application 
        services, from orchestration and management to virtualization software and options for different hardware platforms."
        btnText="Find your solution" onClick ={clicktheclick}/>
        </>
    )
}

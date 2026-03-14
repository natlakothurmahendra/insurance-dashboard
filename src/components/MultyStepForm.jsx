import { useState } from "react"
import { add2whelInsForDet } from "../api/apiService";

export const MultyStepForm = () =>{
    const [vehicle, setVehicle] = useState("");
    const [paln, setPaln] = useState("");
    const [set, setSet] = useState(0);

    const next = () =>{
        setSet(set +1)
    }
     const prev = () =>{
        setSet(set -1)
    }

    async function send(){
        try{
      await add2whelInsForDet({
              vehicle,
              paln
      })
      }catch(err){
            console.log(err)
      }
    }
   return(
    <>
    {set === 0 && 
    <>
    <input type="text" placeholder="vehicle" value={vehicle} onChange={(e) => setVehicle(e.target.value)}/>
    <button onClick={next}>Next</button>
    </>
    }

    {set === 1 && 
    <>
    <input type="text" placeholder="plan" value={paln} onChange={(e) => setPaln(e.target.value)}/>
    <button onClick={prev}>Prev</button>
    <button onClick={next}>Next</button>
    </>
    }

    
    {set === 2 && 
    <>
    <p>{vehicle}</p>
    <p>{paln}</p>
    <button onClick={prev}>Prev</button>
    <button onClick={send}>post</button>
    </>
    }
    </>
   )
}
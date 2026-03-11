import { Fragment, useEffect, useState } from "react";
import { takeRouterInfo } from "../../api/routerService";
import { Link } from "react-router-dom";
export const Solution_Listing = () =>{
    const [showRouters, setShowrouters] = useState([])

    useEffect(() => {
        fetchRouters()
    },[])
async function fetchRouters() {
    const res = await takeRouterInfo()
    setShowrouters(res.data);
}
    
    return(
        <>
        <h1>Routers Solutions</h1>
         {
            showRouters.map((each) => (
                <Fragment key={each.id}>
                <p>{each.para_of_router}</p>
                    <Link to={each.link_of_header}><h3>{each.head_of_router}</h3></Link>
                </Fragment>
            ))
         }
        </>
    )
}
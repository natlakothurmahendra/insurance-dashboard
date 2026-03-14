import { MuseCard } from "./museCard/MuseCard"
import cardImage from "../assets/images/museCard.png"
import { DynamicSearchBar } from "./DynamicSearchBar"
export const DashBoard = () => {



    return(
        <div>
        <h2>Dashboard</h2>
        <DynamicSearchBar/>
        <MuseCard imgsrc={cardImage} title="Simplify operations" list={["Deploy branch networks faster with Cisco tested and validated designs.", 
            "Reduce operational complexity and IT workload.", "Easily cross domains for issue detection and resolution."
        ]} museCardLinkText="Explore Cisco Catalyst SD-WAN" museCardLinkTo="https://www.cisco.com/site/us/en/solutions/networking/sdwan/index.html"/>
        
        </div>
    )
}
import { Link } from "react-router-dom"
import styles from "./museCard.module.css"
export const MuseCard = ({imgsrc,title, list, museCardLinkText, museCardLinkTo} ) => {
    return(
        <div className={styles.container}>
            <img src={imgsrc}/>
            <h3>{title}</h3>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <Link target="_blank" to={museCardLinkTo}>{museCardLinkText}</Link>
        </div>
    )
}
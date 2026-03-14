import { InputField } from "../formComponents/InputField"
import styles from "./policyCard.module.css"
export const PolicyCard = ({h3text, p3text, spantext, h4text, liItems}) => {
    return(
        <div className={styles.card}>
        <InputField type="checkbox" />
        <h3>{h3text}</h3>
        <p>{p3text}</p>
        <span>{spantext}</span>
        <h4>{h4text}</h4>
        <ul>
            {liItems.map((item, index) =>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        </div>
    )
}
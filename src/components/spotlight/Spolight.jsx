import  styles from "./spotlight.module.css"
export const Spolight = ({src, alt, h3Text, pText, btnText, onClick}) => {
    return(
        <>
        <img className={styles.image} src={src} alt={alt}/>
        <h3>{h3Text}</h3>
        <p>{pText}</p>
        <button onClick={onClick}>{btnText}</button>
        </>
    )
}

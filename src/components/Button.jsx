export const Button = ({buttontext,onClick, type}) => {
    return(
        <button onClick={onClick} type={type}>{buttontext}</button>
    )
}
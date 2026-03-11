export const InputField = ({type, placeholder, inputMode, pattern}) => {
    //hiden arrows in num filed
    return(
        <input type={type} placeholder={placeholder} inputMode={inputMode} pattern={pattern}/>
    )
}
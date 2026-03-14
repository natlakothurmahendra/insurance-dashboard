export const InputField = ({type, placeholder, inputMode, pattern, value, checked, onChange}) => {
    //hiden arrows in num filed
    return(
        <input type={type} placeholder={placeholder} inputMode={inputMode} pattern={pattern} value={value}
        checked={checked} onChange={onChange}/>
    )
}
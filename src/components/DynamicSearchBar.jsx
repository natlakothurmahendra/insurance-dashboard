import { useEffect, useState } from "react"

export const DynamicSearchBar = () => {
    const words = ["Shirts", "Pants", "T-Shirts"]
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0)
    const [isdeleting, setIsdeleting] = useState(false)
    
    const currentWord = words[index]

   useEffect(() => {
    let timer = setTimeout(() => {
         if(!isdeleting){
        setText(currentWord.substring(0, text.length +1))

        if(text === currentWord){
            setTimeout(() => {
               setIsdeleting(true) 
            }, 1000);
            
        }
    }else{
       setText(currentWord.substring(0, text.length  - 1))

       if(text === ""){
        setIsdeleting(false)
        setIndex((prev) => (prev + 1) % words.length)
       }
    }
     }, 150);

      return () => {clearTimeout(timer)}

   },[text, index, isdeleting])

    
    
    return(
        <>
        <input type="text" placeholder={`Search for ${text}`}/>
        </>
    )
}
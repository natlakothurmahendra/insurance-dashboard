import { Children, createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isChecked, setIschecked] = useState(false)
    const [editData, setEditData] = useState({});
     const [edit, setEdit] = useState(null);

    return(
        <AuthContext.Provider value={{edit, setEdit, editData, setEditData, isChecked, setIschecked}}>
            {children}
        </AuthContext.Provider>
    )
}
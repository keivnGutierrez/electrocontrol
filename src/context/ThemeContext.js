import React, {useState} from 'react'

const  Context = React.createContext({});

export const ThemeContextProvider=({children})=>{
    const[themeDark,setTheme] =useState(false);
    return <Context.Provider value={{themeDark,setTheme}}>
        {children}
    </Context.Provider>
}
export default Context;
import { useContext } from 'react';
import { createContext } from 'react'

export const ThemeContext = createContext({
    themeMode : "light",
    changeThemeMode : ()=>{
        
    }
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useThemeContext()
{ 
    return useContext(ThemeContext)

};
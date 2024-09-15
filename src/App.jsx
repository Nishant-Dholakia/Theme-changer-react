
import { useState } from "react"
import Card from "./components/card"
import ThemeBtn from "./components/Theme"
import { ThemeContextProvider } from "./context/UserContext"
import { useEffect } from "react";
function App() {
  const [themeMode,setThemeMode] = useState('light');
  const changeThemeMode = (theme)=>
  {
    
    setThemeMode(theme);

  }
  useEffect(()=>
  {
      let theme = document.querySelector('html').classList;
      theme.remove('light','dark');
      theme.add(themeMode)
  },[themeMode])
  return (
<ThemeContextProvider value={{themeMode,changeThemeMode}}>

                  <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
  </ThemeContextProvider>
  )
}

export default App

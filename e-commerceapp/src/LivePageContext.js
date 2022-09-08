import { createContext , useContext, useState} from "react";
import {HomePage} from "./HomePage";
const LiveState = createContext()

function LivePageContext  ({children}) {
    const [livePage,setLivePage] = useState(<HomePage />)
  return (
    <LiveState.Provider value={{livePage,setLivePage}}>
      {children}
    </LiveState.Provider>
  )
}
const useLivePageContext = () => useContext(LiveState)
export {LivePageContext,useLivePageContext}
import { useContext } from "react"
import { AppContext } from "../AppContext/AppContext"

export const useAppContext = () =>{
    return useContext(AppContext)
  }
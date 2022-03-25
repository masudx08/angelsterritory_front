import React, {useState} from 'react'
export const MyContext = React.createContext();

export default function MainContext({children}) {
  const [carts, setCarts] = useState([])

  const defaultValue = {
    carts, setCarts
  }
  return (
   <MyContext.Provider value={defaultValue}>
     {children}
   </MyContext.Provider>
  )
}

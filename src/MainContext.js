import React, {useState} from 'react'
export const MyContext = React.createContext();

export default function MainContext({children}) {
  const [carts, setCarts] = useState([])
  const [user, setUser] = useState({})
  const [wallet, setWallet] = useState({})

  const defaultValue = {
    carts, setCarts,
    user, setUser,
    wallet, setWallet
  }
  return (
   <MyContext.Provider value={defaultValue}>
     {children}
   </MyContext.Provider>
  )
}

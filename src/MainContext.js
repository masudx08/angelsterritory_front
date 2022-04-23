import React, {useState} from 'react'
export const MyContext = React.createContext();

export default function MainContext({children}) {
  const [btcStream, setBtcStream] = useState([])
  const [carts, setCarts] = useState([])
  const [user, setUser] = useState({})
  const [wallet, setWallet] = useState({})

  const defaultValue = {
    carts, setCarts,
    user, setUser,
    wallet, setWallet,
    btcStream, setBtcStream
  }
  return (
   <MyContext.Provider value={defaultValue}>
     {children}
   </MyContext.Provider>
  )
}

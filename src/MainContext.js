import React, {useState} from 'react'
export const MyContext = React.createContext();

export default function MainContext({children}) {
  const [socket, setSocket] = useState({})
  const [btcStream, setBtcStream] = useState([])
  const [carts, setCarts] = useState([])
  const [user, setUser] = useState({})
  const [wallet, setWallet] = useState({})

  const defaultValue = {
    socket, setSocket,
    btcStream, setBtcStream,
    carts, setCarts,
    user, setUser,
    wallet, setWallet,
    
  }
  return (
   <MyContext.Provider value={defaultValue}>
     {children}
   </MyContext.Provider>
  )
}

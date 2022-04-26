import React, {useState} from 'react'
export const MyContext = React.createContext();

export default function MainContext({children}) {
  const [socket, setSocket] = useState({})
  const [btcStream, setBtcStream] = useState([])
  const [ethStream, setEthStream] = useState([])
  const [bnbStream, setBnbStream] = useState([])
  const [carts, setCarts] = useState([])
  const [user, setUser] = useState({})
  const [wallet, setWallet] = useState({})
  const [selectedCoin, setSelectedCoin] = useState('BTC')
  const [selectedTime, setSelectedTime] = useState(60*1000)

  const defaultValue = {
    socket, setSocket,
    btcStream, setBtcStream,
    ethStream, setEthStream,
    bnbStream, setBnbStream,
    carts, setCarts,
    user, setUser,
    wallet, setWallet,
    selectedCoin, setSelectedCoin,
    selectedTime, setSelectedTime
  }
  console.log(typeof selectedTime, selectedTime)
  return (
   <MyContext.Provider value={defaultValue}>
     {children}
   </MyContext.Provider>
  )
}

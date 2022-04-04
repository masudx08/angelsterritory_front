import React, {useEffect, useState} from 'react'
import { cookieParser } from '../../utils/functions'
import { getHistoryFetch } from '../../utils/services'

export default function History() {
  const [history, setHistory] = useState([])
  useEffect(()=>{
    getHistoryFetch()
    .then(res=>{
     setHistory(res)
    })
  },[])
  console.log(history)
  return (
    <div>history</div>
  )
}

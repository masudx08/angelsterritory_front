import React, { useEffect } from 'react'
import { cookieParser } from '../../utils/functions'

export default function Profile() {

  useEffect(()=>{
    fetch('http://localhost:5555/user', {
      method : 'GET',
      headers: {
        token : cookieParser('token')
      }
    }).then(res=>res.json())
    .then(res=>{
      console.log(res)
    })
  },[])
  return (
    <div>Profile</div>
  )
}

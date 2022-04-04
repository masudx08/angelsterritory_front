import React, { useEffect, useState } from 'react'
import { cookieParser } from '../../utils/functions'
import { profileFetch } from '../../utils/services'

export default function Profile() {
const [user, setUser]  = useState({})
  useEffect(()=>{
    profileFetch()
    .then(res=>{
     setUser(res)
    })
  },[])
  return (
    <div>
      email: {user?.email} <br />
      role: {user?.role}
    </div>
  )
}

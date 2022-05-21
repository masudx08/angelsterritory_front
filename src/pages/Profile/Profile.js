import React, { useContext, useEffect, useState } from 'react'
import MyNav from '../../components/MyNav/MyNav'
import { MyContext } from '../../MainContext'
import { cookieParser } from '../../utils/functions'
import { profileFetch } from '../../utils/services'

export default function Profile() {
 const {user} = useContext(MyContext)
 console.log(user)
  return (
    <div>
      <MyNav />
     <div>
       Name: {user?.name}
     </div>
     <div>
       Email: {user?.email}
     </div>
     <div>
       Balance: {user?.wallet.USDT} USDT
     </div>
    </div>
  )
}

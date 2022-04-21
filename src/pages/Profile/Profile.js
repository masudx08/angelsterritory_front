import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../MainContext'
import { cookieParser } from '../../utils/functions'
import { profileFetch } from '../../utils/services'

export default function Profile() {
 const {profile} = useContext(MyContext)
 console.log(profile)
  return (
    <div>
     profile
    </div>
  )
}

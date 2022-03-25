import React, { useState, useContext, useEffect } from 'react'
import { MyContext } from '../../MainContext'
import { getCarts } from '../../utils/services'


export default function Trade() {
  const {carts, setCarts} = useContext(MyContext)
  
  useEffect(()=>{
    getCarts()
    .then(res=>{
     setCarts(res)
    })
  },[])
  
  console.log(carts,'carts')
  
  return (
    <div>
      {
        carts.map((cart, i) => {
          return (
            <div key={i}>
              {cart._id}
            </div>
          )
        })
      }
    </div>
  )
}

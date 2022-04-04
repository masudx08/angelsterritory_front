import React, { useState, useContext, useEffect } from 'react'
import { MyContext } from '../../MainContext'
import { getCartsFetch, upPoolFetch, downPoolFetch } from '../../utils/services'


export default function Trade() {
  const {carts, setCarts} = useContext(MyContext)
  
  useEffect(()=>{
    getCartsFetch().then(res=>{setCarts(res)})
  },[])
  
  const upPoolHandler = (id, data) => {
    upPoolFetch(id, data)
  }
  const downPoolHandler = (id, data) => {
    downPoolFetch(id, data)
  }
  
  return (
    <div>
      {
        carts.map((cart, i) => {
          return (
            <div key={i}>
              <p>{cart.currency}, pool: {cart.totalPool}, id {cart._id}</p>
              <input type="text" placeholder='upPool' onKeyUp={(event)=>event.code === 'Enter' && upPoolHandler(cart._id, event.target.value)} />
              <input type="text" placeholder='downPool' onKeyUp={(event)=>event.code === 'Enter' && downPoolHandler(cart._id, event.target.value)} />
            </div>
          )
        })
      }
    </div>
  )
}
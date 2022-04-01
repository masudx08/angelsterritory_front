import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { login } from '../../utils/services';
export default function Login() {
  const { register, handleSubmit } = useForm()

  const handleLogin = data => {
    login(data)
    .then(res=>{
      const now = new Date()
      now.setTime(now.getTime()+60*1000)
      document.cookie = `token=${res.jwtAccessToken}; expires=${now.toUTCString()}`
    })
  }
  return (
    <div>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
      <form onSubmit={handleSubmit((data) => handleLogin(data))}>
        <input {...register('email')} type="text" placeholder='Email' />
        <input {...register('password')} type="text" placeholder='Password' />
        <input type="submit"  />
      </form>
    </div>
  )
}

import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { login } from '../../utils/services';
export default function Login() {
  const { register, handleSubmit } = useForm()
  const handleLogin = data => {
    login(data)
    .then(res=>{
      console.log(res.message)
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

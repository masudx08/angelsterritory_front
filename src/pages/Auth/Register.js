import React from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom'
import { registationFetch } from '../../utils/services'
export default function Register() {
  const {register, handleSubmit} = useForm()
  const handleRegister = data => {
   registationFetch(data).then(res=>console.log(res))
  }
  return (
    <div>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
      <form onSubmit={handleSubmit(data=>handleRegister(data))}>
        <input {...register('email')} type="text" placeholder='Email' />
        <input {...register('password')} type="text" placeholder='Password' />
        <input {...register('confirmPassword')} type="text" placeholder='Confirm Pasword' />
        <input type="submit"  />
      </form>
    </div>
  )
}

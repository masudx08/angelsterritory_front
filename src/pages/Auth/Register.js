import React from 'react'
import { Form } from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import MyNav from '../../components/MyNav/MyNav'
import { registationFetch } from '../../utils/services'
import './auth.css'
export default function Register() {
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm()
  const handleRegister = data => {
   registationFetch(data).then(res=>console.log(res))
  }
  return (
    <div className='registerCont'>
      <MyNav />
      <div className="formContainer">
        <div className="d-flex gap-3 mb-3">
          <h3  className="secondary-color cursor" onClick={() => navigate("/login")}>
            Login
          </h3>
          <h3 className="primary-color cursor" onClick={() => navigate("/register")}>
            Register
          </h3>
        </div>
        <Form onSubmit={handleSubmit(data=>handleRegister(data))}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              {...register("email")}
              type="email"
              placeholder="Enter your Email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              {...register("password")}
              type="password"
              placeholder="Password here"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              {...register("confirmPassword")}
              type="password"
              placeholder="Again type password"
            />
          </Form.Group>
          <button type="submit" className="mybtn">
            Submit
          </button>
        </Form>
      </div>
    </div>
  )
}

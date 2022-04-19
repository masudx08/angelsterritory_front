import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginFetch } from "../../utils/services";
import "./auth.css";
export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const handleLogin = (data) => {
    console.log(data, "data");
    loginFetch(data).then((res) => {
      const now = new Date();
      now.setTime(now.getTime() + 3600 * 1000);
      document.cookie = `token=${
        res.jwtAccessToken
      }; expires=${now.toUTCString()}`;
    });
  };
  return (
    <div className="loginCont">
      <div className="formContainer">
        <div className="d-flex gap-3 mb-3">
          <h3 className="primary-color cursor" onClick={() => navigate("/login")}>
            Login
          </h3>
          <h3 className="secondary-color cursor" onClick={() => navigate("/register")}>
            Register
          </h3>
        </div>
        <Form onSubmit={handleSubmit((data) => handleLogin(data))}>
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
          <button type="submit" className="mybtn">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}

import {axiosWithAuth} from '../utils/axiosWithAuth'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import React from "react";
import {useState} from 'react'
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
    const history = useHistory()
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleChange = e=>{
    e.preventDefault()
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
  }

  const sendToRegister =()=>{
      history.push('/register')
  }

  const login = e=>{
    e.preventDefault()
    axiosWithAuth()
    .post('https://post-here-subreddit.herokuapp.com/api/auth/login', credentials)
    .then(res=>{
      console.log(res, 'retrieved the token')
      localStorage.setItem('token', res.data.token)
      history.push(`/protected/${res.data.id}`)
    })
    .catch(res=>{
      console.log(res)
      alert('the username or password is incorrect')
    })
  }

  return (
    <>
      <h1>Welcome to the reddit App!</h1>
      <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
        <h5>don't have an account?</h5>
        <button onClick={sendToRegister}>Click here to create one</button>
    </>
  );
};

export default Login;
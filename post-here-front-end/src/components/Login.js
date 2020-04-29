import React, { useContext } from 'react';
import { Form, FormGroup, FormText, Button } from 'reactstrap';
import {useState} from 'react'
import { useHistory } from "react-router-dom";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'
import { connect } from 'react-redux';

import '../styles/Login.scss'; 

import App, { AppContext, LoginContext, LogoutContext } from '../App'; 

function LoginForm(){

    const status = useContext(AppContext); 
    const loginFunction = useContext(LoginContext); 
    const logoutFunction = useContext(LogoutContext); 
    
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
      })
    const history = useHistory()

    const handleChange = e=>{
        e.preventDefault()
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
      }

    const login = e=>{
        e.preventDefault()
        axiosWithAuth()
        .post('/login', credentials)
        .then(res=>{
            
            const user = res.data;
            loginFunction(user);

          console.log(res, 'retrieved the token')
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('id', res.data.user.id) 
          //history.push(`/protected/${res.data.user.id}`)
          history.push("/dashboard"); 
        })
        .catch(res=>{
          console.log(res)
          alert('the username or password is incorrect')
        })
      }

    const sendToRegister =()=>{
        history.push('/register')
    }

    return(
        <>
            <Form className='auth-form' onSubmit = {login}>

                <FormGroup>
                    <FormText>Email:</FormText>
                    <label htmlFor = 'email'>
                        <input
                             type="text"
                             name="username"
                             value={credentials.username}
                             onChange={handleChange}
                        />
                    </label>
                </FormGroup>

                <FormGroup>
                    <FormText>Password:</FormText>
                    <label htmlFor = 'password'>
                        <input 
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </label>
                </FormGroup>

                <FormGroup>
                    <Button color='danger' type='submit' size="lg">
                        Submit
                    </Button>
                </FormGroup>
            </Form>
            {/* <p>don't have an account?</p>
            <Button onClick={sendToRegister}>Click here to make one!</Button> */}
        </>
    ); 
}; 

export default LoginForm;
import React from 'react';
import { Form, FormGroup, FormText, Button } from 'reactstrap';
import {useState} from 'react'
import { useHistory } from "react-router-dom";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'
import { connect } from 'react-redux';

import '../styles/Login.scss'; 

function LoginForm(){
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
          console.log(res, 'retrieved the token')
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('id', res.data.user.id) 
          history.push(`/protected/${res.data.user.id}`)
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
                    <Button color = 'danger' type='submit'>
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
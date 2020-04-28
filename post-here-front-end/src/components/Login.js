import React from 'react';
import { Form, FormGroup, FormText, Button } from 'reactstrap';
import {useState} from 'react'
import { useHistory } from "react-router-dom";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'


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
          history.push(`/protected/${res.data.id}`)
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
            <Form onSubmit = {login}>

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
            <p>don't have an account?</p>
            <Button onClick={sendToRegister}>Click here to make one!</Button>
        </>
    )
} 
export default LoginForm;


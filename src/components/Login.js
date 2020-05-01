import React, { useContext } from 'react';
import { Form, FormGroup, FormText, Button } from 'reactstrap';
import {fetchUser,fetchPosts} from '../store/actions'
import {useState} from 'react'
import { useHistory } from "react-router-dom";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core/'; 

import '../styles/Login.scss'; 

import { LoginContext } from '../App'; 

function LoginForm(props){

    const loginFunction = useContext(LoginContext); 
    
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
            localStorage.setItem('token', res.data.token); 
            loginFunction(user);
            props.fetchUser(res.data.user.id)
            props.fetchPosts(res.data.user.id)
            history.push("/dashboard"); 
        })
        .catch(res=>{
          console.log(res)
          alert('the username or password is incorrect')
        })
      }

    return(
        <>
            <Form className='auth-form' onSubmit = {login}>
                <FormGroup>
                        <TextField
                            variant="outlined"
                            label="username"
                             type="text"
                             name="username"
                             value={credentials.username}
                             onChange={handleChange}
                        />
                </FormGroup>

                <FormGroup>
                        <TextField
                            label="password"
                            variant="outlined" 
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                </FormGroup>

                <FormGroup>
                    <Button color='primary' type='submit' size="lg">
                        Submit
                    </Button>
                </FormGroup>
            </Form>
        </>
    ); 
}; 

export default connect(null,{fetchUser,fetchPosts})(LoginForm);
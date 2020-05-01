import React, {useState, useContext} from 'react';
import { Form, FormGroup, FormText, Button } from 'reactstrap';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { TextField } from '@material-ui/core'; 

import { LoginContext } from '../App'; 

import '../styles/Register.scss'; 

function Register(){

    const login = useContext(LoginContext); 

    const [formValues, setFormValues] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    })

    const history = useHistory();

    const handleChange = e=>{
        e.preventDefault()
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const register = e =>{
        e.preventDefault()
        console.log(formValues)
        axios
        .post('https://post-here-subreddit.herokuapp.com/api/auth/register', formValues)
        .then(res=>{
            console.log(res)
            const user = res.data.response; 
            console.log(user); 
            login(user); 
            history.push('/dashboard'); 
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    return(
        <>
            <Form className='register-form' onSubmit ={register}>
                <FormGroup>
                    <label htmlFor = 'name'>
                        <TextField
                            variant="outlined"
                            label="name" 
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange} 
                        />
                    </label>
                </FormGroup>
                <FormGroup>
                    <label htmlFor = 'username'>
                        <TextField 
                            variant="outlined"
                            label="username"
                            type="text"
                            name="username"
                            value={formValues.username}
                            onChange={handleChange}  
                        />
                    </label>
                </FormGroup>
                <FormGroup>
                    <label htmlFor='email'>
                        <TextField
                            variant="outlined"
                            label="email" 
                            type="text"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange} 
                        />
                    </label>
                </FormGroup>
                <FormGroup>
                    <label htmlFor='password'>
                        <TextField
                            variant="outlined"
                            label="password" 
                            type = 'password' 
                            name="password"
                            value={formValues.password}
                            onChange={handleChange} 
                        />
                    </label>
                </FormGroup>
                <FormGroup>
                    <Button type='submit' size='lg' color='primary'>
                        Register
                    </Button>
                </FormGroup>
            </Form>

        </>
    )
}
export default Register;
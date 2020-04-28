import React from 'react';
import { Form, FormGroup, FormText, Button } from 'reactstrap';

function LoginForm(){
    return(
        <>
            <Form>
                <FormGroup>
                    <FormText>Email:</FormText>
                    <label htmlFor = 'email'>
                        <input type = 'email' name = 'email' id ='email' />
                    </label>
                </FormGroup>
                <FormGroup>
                    <FormText>Password:</FormText>
                    <label htmlFor = 'password'>
                        <input type = 'password' name = 'password' id = 'password' />
                    </label>
                </FormGroup>
                <FormGroup>
                    <Button color = 'danger'>
                        Submit
                    </Button>
                </FormGroup>
            </Form>
        </>
    )
} 
export default LoginForm;


import React, {useState} from 'react';
import { Form, FormGroup, FormText, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Button } from 'reactstrap';

function RegisterForm(){
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);


    return(
        <>
            <Form>
                <FormGroup>
                    <FormText>Name:</FormText>
                    <label htmlFor = 'name'>
                        <input type = 'text' name = 'name' id = 'name' />
                    </label>
                </FormGroup>
                <FormGroup>
                    <FormText>Username:</FormText>
                    <label htmlFor = 'username'>
                        <input type = 'text' name = 'username' id = 'username' />
                    </label>
                </FormGroup>
                <FormGroup>
                    <FormText>E-Mail:</FormText>
                    <label htmlFor='email'>
                        <input type = 'email' name='email' id='email' />
                    </label>
                </FormGroup>
                <FormGroup>
                    <FormText>Password:</FormText>
                    <label htmlFor='password'>
                        <input type = 'password' name='password' id='password' />
                    </label>
                </FormGroup>
                <FormGroup>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            User Role
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>User Role</DropdownItem>
                            <DropdownItem>Admin</DropdownItem>
                            <DropdownItem>User</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </FormGroup>
                <FormGroup>
                    <Button>
                        Submit
                    </Button>
                </FormGroup>
            </Form>

        </>
    )
}
export default RegisterForm;
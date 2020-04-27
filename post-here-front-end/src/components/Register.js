import React, {useState} from 'react';
import { Form, FormGroup, FormText, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

function RegisterForm(){
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);


    return(
        <>
            <Form>
                <FormGroup>
                    <label htmlFor = 'name'>
                        <FormText>Name:</FormText>
                        <input type = 'text' name = 'name' id = 'name' />
                    </label>
                </FormGroup>
                <FormGroup>
                    <label htmlFor = 'username'>
                        <FormText>Username:</FormText>
                        <input type = 'text' name = 'username' id = 'username' />
                    </label>
                </FormGroup>
                <FormGroup>
                    <label htmlFor='email'>
                        <FormText>E-Mail:</FormText>
                        <input type = 'email' name='email' id='email' />
                    </label>
                </FormGroup>
                <FormGroup>
                    <label htmlFor='password'>
                        <FormText>Password:</FormText>
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
            </Form>

        </>
    )
}
export default RegisterForm;
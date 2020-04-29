import React, {useState} from 'react'
import { Form, FormGroup, FormText, Button } from 'reactstrap';
import axios from 'axios'

const NewPostForm = (props)=>{
    const [formValues, setFormValues] = useState({
        title: '',
        postContent: ''
    })

    const handleChange = e=>{
        e.preventDefault();
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e=>{
        console.log(formValues,"new post!")
    }


    return(
            <Form onSubmit = {handleSubmit}>
                <FormGroup>
                    <FormText>Title:</FormText>
                    <label htmlFor = 'title'>
                        <input 
                            type="text"
                            name="title"
                            value={formValues.title}
                            onChange={handleChange} 
                        />
                    </label>
                </FormGroup>
                <FormGroup>
                    <FormText>Text:</FormText>
                    <label htmlFor = 'postContent'>
                        <input 
                            type="textarea"
                            name="postContent"
                            value={formValues.postContent}
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
    )
}

export default NewPostForm;
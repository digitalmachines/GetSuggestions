import React, {useState} from 'react'
import { Form, FormGroup, FormText, Button } from 'reactstrap';
import axios from 'axios'

const NewPostForm = (props)=>{
    //console.log(props,'newPost props')

    const suggest = e =>{
        props.handleSuggestion()
    }
    const submit = e =>{
        e.preventDefault();
        props.saveNew()
        props.handlePostSubmit()
    }

    return(
            <Form onSubmit = {submit}>
                <FormGroup>
                    <FormText>Title:</FormText>
                    <label htmlFor = 'title'>
                        <input 
                            type="text"
                            name="post_title"
                            value={props.formValues.post_title}
                            onChange={props.handleChange} 
                        />
                    </label>
                </FormGroup>
                <FormGroup>
                    <FormText>Text:</FormText>
                    <label htmlFor = 'postContent'>
                        <input 
                            type="textarea"
                            name="post_text"
                            value={props.formValues.post_text}
                            onChange={props.handleChange}  
                        />
                    </label>
                </FormGroup>
                <FormGroup>
                <Button color = 'warning' onClick={suggest}>
                        Get Suggestions
                </Button>
                    <Button color = 'warning' type='submit'>
                        Submit
                    </Button>
                </FormGroup>
            </Form>
    )
}

export default NewPostForm;
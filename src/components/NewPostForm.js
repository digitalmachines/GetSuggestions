import React, {useState} from 'react'
import { Form, FormGroup, FormText, Button } from 'reactstrap';
import axios from 'axios'

const NewPostForm = (props)=>{
    const [formValues, setFormValues] = useState({
        title: '',
        text: ''
    })

    const handleChange = e=>{
        e.preventDefault();
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e=>{
        e.preventDefault()
        console.log(formValues)
        axios
        .post("https://sheltered-scrubland-21243.herokuapp.com/predict.json",formValues )
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err,"error thrown")
        })
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
                            name="text"
                            value={formValues.text}
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
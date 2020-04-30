import React, { useState, useContext } from 'react'; 
import { useHistory } from 'react-router-dom'; 
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label } from "reactstrap";
import axios from 'axios'; 

import '../styles/CreatePost.scss'; 
import { AppContext } from '../App';

function CreatePost(){

  const [post, setPost] = useState({ post_title: '', post_text: ''})
  const history = useHistory();
  const user = useContext(AppContext); 
    console.log(user); 

  const { handleSubmit, register, errors } = useForm({
        defaultValues: { category: "Choose one" }
    });

  const onSubmit = values => {

    axios.post(`https://post-here-subreddit.herokuapp.com/api/users/${user.user.id}/posts/`, post, 
    { headers:{Authorization: user.token }})
        .then(response => {
            console.log(response); 
            history.push("/dashboard");
        })
        .catch(error => {
            console.log(error); 
        })
  };

    function handleChange(e){
        setPost({...post, [e.target.name]: e.target.value })
        console.log(post); 
    }

return (
    <form className="form create-post" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="title">Post Title</Label>
        <input
          className="form-control"
          name="post_title"
          type="title"
          id="title"
          placeholder="Please enter your post title"
          value={post.post_title}
          onChange={handleChange}
          ref={register({
            required: "Required"
          })}
        />
        <span className="error">{errors.title && errors.title.message}</span>
      </FormGroup>
      <FormGroup>
        <Label for="description">Post Text</Label>
        <textarea
          className="form-control"
          name="post_text"
          type="description"
          id="description"
          value={post.post_text}
          onChange={handleChange}
          placeholder="Please enter the text of your Reddit post"
          ref={register({
            required: "Required"
          })}
        ></textarea>
        <span className="error">
          {errors.description && errors.description.message}
        </span>
      </FormGroup>
      <div className="bottom">
        <FormGroup>
          <span className="error">
            {errors.category && errors.category.message}
          </span>
        </FormGroup>
        <Button type="submit" color="primary" size="lg" block>
          Create Post
        </Button>
      </div>
    </form>
  );
}

export default CreatePost;
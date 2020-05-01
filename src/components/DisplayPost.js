import React, { useContext, useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { AppContext, PostIDContext } from '../App';
import { Container, Card, CardImg, CardTitle, CardSubtitle, CardHeader, CardBody, CardText, Col, Row, Button} from 'reactstrap';

import '../styles/DisplayPost.scss'; 

function DisplayPost(){
   
    const user = useContext(AppContext); 
    const postId = useContext(PostIDContext); 
    const [post, setPost] = useState({title: '', text: ''}); 
    let data = [];
    let subreddits = [];
    const [posts, setPosts] = useState([]);  

    useEffect(() => {
        axios.get(`https://post-here-subreddit.herokuapp.com/api/users/${user.id}/posts/${postId}`, 
        {headers: { Authorization: user.token }})
            .then(response => {
                console.log(response); 
                const post = { title: response.data.response[0].post_title, text: response.data.response[0].post_text }
                setPost(post); 
                console.log(post); 
                getPrediction(); 
            })
            .catch(error => {
                console.log(error); 
            })

            function getPrediction(){
                axios.post(`https://sheltered-scrubland-21243.herokuapp.com/predict.json`, post)
                    .then(response => {
                        console.log(response); 
                        data = response.data; 
                        console.log('Data Structure: ', data); 
                        for(let i=0; i<data.length;i++){
                            subreddits[i] = {id: i, subreddit: data[i][0].subreddit, probability: data[i][0].probability}; 
                        }
                        console.log(subreddits); 
                        setPosts(subreddits); 
                    })
                    .catch(error => {
                        console.log(error); 
                    });    
                }

    }, []); 

    
    return(
        <Container className='post'>
                <Col>
                <Card>
                    <CardTitle>Post Title</CardTitle>
                    <CardSubtitle>{user.username}</CardSubtitle>
                    <CardHeader>{post.title}</CardHeader>
                    <CardBody>
                        <CardImg></CardImg>
                        <CardText>{post.text}</CardText>
                        <CardTitle>Predictions: </CardTitle>
                        {posts.map(item => (
                            <CardText>{item.subreddit} {item.probability}</CardText>
                        ))}
                        {/* <Button color='primary'>Get New Prediction!</Button> */}
                    </CardBody>
                </Card>
                </Col>
            </Container>           
   ) 
}

export default DisplayPost; 
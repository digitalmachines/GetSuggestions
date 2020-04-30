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
    }, []); 

        async function getPrediction(){
            await axios.post(`https://sheltered-scrubland-21243.herokuapp.com/predict.json`, post)
                .then(response => {
                    console.log(response.data); 
                    data = response.data; 
                })
                .catch(error => {
                    console.log(error); 
                });    
        
                for(let i=0; i<data.subreddits.length;i++){
                    subreddits[i] = {id: i, subreddit: data.subreddits[i], probability: data.probabilities[i]*100}; 
                }
                console.log(subreddits); 
            }

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
                        { 
                        subreddits.map(item => (
                            <CardText key={item.id}>{item.subreddit}</CardText>
                        ))}
                        <Button color='primary' onClick={getPrediction}>Get New Prediction!</Button>
                    </CardBody>
                </Card>
                </Col>
            </Container>           
   ) 
}

export default DisplayPost; 
import React, { useContext, useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { AppContext, PostIDContext } from '../App';
import { Container, Card, CardImg, CardTitle, CardSubtitle, CardHeader, CardBody, CardText, Col, Row, Button} from 'reactstrap';

import '../styles/DisplayPost.scss'; 

function DisplayPost(){
   
    const user = useContext(AppContext); 
    const postId = useContext(PostIDContext); 
    const [post, setPost] = useState({title: '', text: ''}); 
    const [predictions, setPrediction] = useState({probabilities: [], subreddits: []})

    useEffect(() => {
        axios.get(`https://post-here-subreddit.herokuapp.com/api/users/${user.id}/posts/${postId}`, 
        {headers: { Authorization: user.token }})
            .then(response => {
                console.log(response); 
                const post = { title: response.data.response[0].post_title, text: response.data.response[0].post_text }
                setPost(post); 
                console.log(post); 
            })
            .catch(error => {
                console.log(error); 
            })
    }, []); 

        function getPrediction(){
            axios.post(`https://sheltered-scrubland-21243.herokuapp.com/predict.json`, post)
                .then(response => {
                    console.log(response.data); 
                    setPrediction(response.data); 
                })
                .catch(error => {
                    console.log(error); 
                });    
        }

    return(
        <Container className='post'>
                <Col>
                <Card>
                    <CardTitle>Post</CardTitle>
                    <CardSubtitle>{user.username}</CardSubtitle>
                    <CardHeader>{post.title}</CardHeader>
                    <CardBody>
                        <CardImg></CardImg>
                        <CardText>{post.text}</CardText>
                        <CardTitle>Predictions: </CardTitle>
                        { 
                        predictions.subreddits.map(subreddit => {
                            return <CardText key={subreddit.id}>{subreddit}</CardText>
                        })}
                        {
                        predictions.probabilities.map(probability => {
                            return <CardText key={probability.id}>{probability}%</CardText>
                        })
                        }
                        <Button color='primary' onClick={getPrediction}>Get New Prediction!</Button>
                    </CardBody>
                </Card>
                </Col>
            </Container>           
   ) 
}

export default DisplayPost; 
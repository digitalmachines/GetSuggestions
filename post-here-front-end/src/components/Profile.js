import React from 'react';
import { Card, CardImg, CardTitle, Alert, CardSubtitle, CardHeader, CardBody, CardText, Col, Row, Button} from 'reactstrap';

function Profile(){
    return(
        <>
            <Col sm = '11' md={{size: 12, offset: 3 }}>
            <Row sm = '2'>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} >
                    <CardHeader >
                        <CardTitle tag ='h3'   className="text-center text-warning" >
                            Username 
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Col sm = '10' md={{offset: 1 }}>
                            <Row sm = '2'>
                                <Card >
                                    <CardImg src = "./imgs/defaultProfileImg.jpg" />
                                    <Button>
                                        Edit
                                    </Button>
                                </Card>
                                <Card body inverse className = 'text-center' style={{ backgroundColor: '#444', borderColor: '#FFFFFF' }}>
                                    
                                        <CardBody>
                                                <Alert color = 'dark' >
                                                    Name: Name
                                                
                                                    <Button>
                                                        Edit
                                                    </Button>
                                                </Alert>
                                                <Alert color = 'dark' >
                                                    Username: Username
                                                
                                                    <Button>
                                                        Edit
                                                    </Button>
                                                </Alert>
                                                <Alert color = 'dark' >
                                                    Password: Password
                                                
                                                    <Button>
                                                        Edit
                                                    </Button>
                                                </Alert>
                                                <Alert color = 'dark' >
                                                    Email: Email
                                                
                                                    <Button>
                                                        Edit
                                                    </Button>
                                                </Alert>
                                        </CardBody>
                                
                                </Card>
                            </Row>
                        </Col>
                    </CardBody>
                </Card>
            </Row>
            </Col>
        </>
    )
}
export default Profile;

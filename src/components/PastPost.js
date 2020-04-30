import React,{useState} from 'react'
import {connect} from 'react-redux'

import { Collapse, Button, CardBody, Card } from 'reactstrap';


const PastPost = (props)=>{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    const deleteHandler = e => {
        e.preventDefault()
        console.log('delete event')
        props.deletePost(props.postId)
        props.deleteSaved(props.postId)
    }

    return(
        
          
            <div>
                <Button color='danger'className="delete" onClick={deleteHandler}>
                    x
                </Button>
                <Button onClick={toggle}>
                  {props.title}
                </Button>
              
                <p></p>
                <Collapse isOpen={isOpen}>
                  <Card>
                    <CardBody>
                      {props.text}
                    </CardBody>
                  </Card>
                </Collapse>

            </div>
          
    )
}


export default PastPost


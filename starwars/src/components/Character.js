


// Write your Character component here

import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';



const Character = (props) => {


    const { data } = props

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <div className="cardInfo">
                <img className="theCrewImg" src={data.image}/>
                <h4>{data.name}</h4>
                <Button color="info" onClick={toggle} style={{ marginBottom: '1.2rem' }}>More</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody style= {{backgroundColor: 'teal'}}>
                <p>Status: {data.status}</p>
                <p>Species: {data.species}</p>
          </CardBody>
        </Card>
      </Collapse>
                
            </div> 
      
      
        
    )
}

export default Character
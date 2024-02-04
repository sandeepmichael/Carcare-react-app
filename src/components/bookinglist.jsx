import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import '../App.css'

const Bookinglistcomponent = ({bookingdetails, handledelete}) => {
    console.log(bookingdetails);
  return (
    <div className='container'>
          <div className='bookingcontainer'>
            {bookingdetails.map((data) => {
                return(
                    <Container>
                        
                            <Col className='d-flex'>
                            
                            <Card className='flex-fill' style={{width:'25rem', margin: '8px'}}>
                                <Card.Body key={data.id}>
                                    
                                    <Card.Title>Booking ID: {data.id}</Card.Title>
                                    <Card.Title>Email: {data.email}</Card.Title>
                                    <Card.Title>
                                        Service Type: {data.service}
                                    </Card.Title>
                                    <Card.Title>Booking Date: {data.selectedDatestring}</Card.Title>
                                    <Button variant="danger" onClick={() => handledelete(data.id)}>Delete</Button>
                                </Card.Body>

                            </Card>
                            
                            </Col>
                            
                        
                    </Container>
                )
            })}

        </div>

    </div>
  )
}

export default Bookinglistcomponent
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import {toast} from 'react-toastify'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../App.css'
import axios from 'axios'


const Bookingcomponent = () => {
    const [email, setEmail] = useState('')
    const [service, setService]  = useState('')
    const[selectedDate, setSelectedDate] = useState('')

    const today = new Date().toISOString().split("T")[0];


     const handleclick = async(e) => {
      e.preventDefault()
     
     
       try {
        const selectedDateObj = new Date(selectedDate);
        const selectedDatestring = JSON.stringify(selectedDateObj).split("T")[0]
      const todayDateObj = new Date(today);
      const data  = {email, service, selectedDatestring}
      console.log(data)
    
      if (selectedDateObj > todayDateObj) {
        // Valid booking date, you can proceed with further actions
        const res = await axios.post("http://localhost:8080/Bookingdetails", data)

          console.log(res.data);
          toast.success('Booking Successfully Completed')
        
      
      } else {
        // Invalid booking date, show an error message or handle accordingly
        alert('please select a date after today date')
      }
  
       

        
       } catch (error) {
         console.log(error)
       }
     }



  return (
    <div className='container'>

        <div className='bookingcontainer'>
         <Form onSubmit={handleclick}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Type of Service
        </Form.Label>
        <Col sm={10}>
        <Form.Select aria-label="Default select example" value={service} onChange={(e) => setService(e.target.value)}>
      <option>Open this select menu</option>
      <option value="car wash">Car Wash</option>
      <option value="Bike wash">Bike Wash</option>

      <option value="cardent removal">Car Dent Removal</option>

      <option value="bikepair">Bike Repair</option>
      <option value="allinone">All in one Service</option>



    </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Booking Date
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="date" placeholder="Date"  value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/>
        </Col>
      </Form.Group>
      <Form.Text className='mx-5' muted>
        <strong>Note:  Booking date should be after today's date.</strong>
      </Form.Text>
     
      

      <Form.Group as={Row} className="mb-3 mt-2">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Book Now</Button>
        </Col>
      </Form.Group>
    </Form>
        </div>
        
    </div>
  )
}

export default Bookingcomponent;
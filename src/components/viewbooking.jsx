import React,{useState, useEffect} from 'react'
import axios from 'axios'
import '../App.css'
import { Card, Button } from 'react-bootstrap';
import Bookinglistcomponent from './bookinglist';

const Viewbookingcomponent = () => {
    const[bookingdetails, setBookingDetails] = useState([]);


    const handledelete = (id) => {
      const newbookingdetails = bookingdetails.filter(bookingdetail => bookingdetail.id !== id);
      setBookingDetails(newbookingdetails);
       alert('Your Booking Deleted')
    }

    useEffect(() => {

        fetch("http://localhost:8080/Bookingdetails")
        .then((res) => {
           return res.json();
        })
        .then((data) => {
            console.log(data)
            setBookingDetails(data)
        })

    }, [])


  return (
    <div className='container'>
       <div className='bookingcontainer'>

       
        
       
          {/* {bookingdata &&   <Bookinglistcomponent bookingdata={bookingdata} />} */}
          <Bookinglistcomponent bookingdetails={bookingdetails} handledelete={handledelete} />
        
          </div>

    </div>
  )
}

export default Viewbookingcomponent
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbarcomponent from './components/navbar'
import Bookingcomponent from './components/booking';
import Homecomponent from './components/home';
import Viewbookingcomponent from './components/viewbooking';

function App() {
 

  return (
    <>
    <BrowserRouter>
        
            <header id="header"> 
            <Navbarcomponent />

            </header>
         
          <Routes>
            <Route path='/' element={<Homecomponent/>}/>
            <Route path="/book" element={<Bookingcomponent />} />
            <Route path='/viewallbooking' element={<Viewbookingcomponent />}/>
          </Routes>
          <ToastContainer />
         
          </BrowserRouter>
        </>
       
  )
}

export default App

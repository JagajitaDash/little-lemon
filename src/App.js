import React from 'react';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

import { useReducer } from 'react';
import BookingPage from './components/bookingpage/BookingPage';



export default function App() {
  
  return (
    <div>
    
    <Navbar/>
    <Routes>
      
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/booking' element={<BookingPage/>} />
      
    </Routes>
    <Hero />
    
    <Footer />
    </div>
  )
}

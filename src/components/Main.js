import React from "react";
import {Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import Signup from './Signup';
import BookingDetails from './BookingDetails';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/booking-details" element={<BookingDetails />}></Route>
        </Routes>
    )
}

export default Main;

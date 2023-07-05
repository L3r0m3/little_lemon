import React from "react";
import {Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
    )
}

export default Main;

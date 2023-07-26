import { React, useState, useReducer, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import Nav from './Nav';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import Signup from './Signup';
import BookingDetails from './BookingDetails';
import LoginPage from './LoginPage';
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";


const Main = () => {


    const initializeTimes = {
        date: '',
        time: '',
        guests: '1',
        occasion: '',
        location: '',
        env: 'Standard',
    };


    const [state, dispatch] = useReducer(updateTimes, initializeTimes);
    const [availableTimes, setAvailableTimes] = useState([]);

    const navigate = useNavigate();


    const fetchAPI = (date) => {
        fetch(`../apiData.json`)
        .then((response) => response.json())
        .then((jsonData) => setAvailableTimes(jsonData[date] || []))
        .catch((error) => console.log(error));
        return [];
    };

    useEffect(() => {
        fetchAPI();
    }, []);


    // Simulate the form submission and return a success response after a delay
    const submitAPI = async (formData) => {
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true); // Simulate a success response
        }, 2000); // Delay in milliseconds (2 seconds in this example)
        });
    };


    const updateDateTimes = async (selectedDate) => {
        try {
        const availableTimes = fetchAPI(selectedDate);
        setAvailableTimes(availableTimes);
        } catch (error) {
        console.log(error);
        }
    };


  function updateTimes(state, action) {
    const { type, payload } = action;

    switch (type) {
      case 'updateDate': {
        return { ...state, date: payload };
      }
      case 'updateTime': {
        return { ...state, time: payload };
      }
      case 'updateNumberOfGuests': {
        return { ...state, guests: payload };
      }
      case 'updateOccasion': {
        return { ...state, occasion: payload };
      }
      case 'updateLocation': {
        return { ...state, location: payload };
      }
      case 'updateEnv': {
        return { ...state, env: payload };
      }
      default:
        return state;
    }
  }

  useEffect(() => console.log(state), [state]);

  const handleChange = (e) => {
    const { dataset: { dispatchtype }, value } = e.target;
    dispatch({ type: dispatchtype, payload: value });

    if (dispatchtype === 'updateDate') {
      updateDateTimes(value);
    }
  };


  const SubmitForm = async (e) => {
    e.preventDefault();
    const formData = {
        guests: state.guests,
        date: state.date,
        location: state.location,
        occasion: state.occasion,
        env: state.env,
      };

      const isSubmitted = await submitAPI(formData);
      console.log('Form submitted:', isSubmitted);
      if (isSubmitted) {
        navigate('/booking-confirmed');
      }
    };

  return (
    <>
      <ChakraProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                SubmitForm={SubmitForm}
                state={state}
                time={state.time}
                env={state.env}
                location={state.location}
                occasion={state.occasion}
                date={state.date}
                guests={state.guests}
                availableTimes={availableTimes}
                dispatch={dispatch}
                handleChange={handleChange}
              />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/booking-details" element={<BookingDetails />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
          <Route
            path=""
            element={
              <BookingForm
                SubmitForm={SubmitForm}
                state={state}
                availableTimes={availableTimes}
                time={state.time}
                env={state.env}
                location={state.location}
                occasion={state.occasion}
                date={state.date}
                guests={state.guests}
                dispatch={dispatch}
                handleChange={handleChange}
              />
            }
          />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default Main;

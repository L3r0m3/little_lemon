import './App.css';
import React from "react";
import Footer from "./components/Footer.js";
import Hero from "./components/Hero.js"
import Highlights from "./components/Highlights.js"
import Testimonials from './components/Testimonials';
import About from './components/About'
import Nav from'./components/Nav';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
      <ChakraProvider>
        <main>
          <Nav />
          <Hero />
          <Highlights />
          <Testimonials />
          <About />
          <Footer />
        </main>
      </ChakraProvider>
  );
}

export default App;

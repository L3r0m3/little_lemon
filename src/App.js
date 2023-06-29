import './App.css';
import React from "react";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js"
import Highlights from "./components/Highlights.js"
import Testimonials from './components/Testimonials';


function App() {
  return (
      <main>
        <Header />
        <Nav />
        <Hero />
        <Highlights />
        <Testimonials />
        <Footer />
      </main>
  );
}

export default App;

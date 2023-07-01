import './App.css';
import React from "react";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js"
import Highlights from "./components/Highlights.js"
import Testimonials from './components/Testimonials';
import About from './components/About'

function App() {
  return (
        <main>
          <Header />
          <Hero />
          <Highlights />
          <Testimonials />
          <About />
          <Footer />
        </main>
  );
}

export default App;

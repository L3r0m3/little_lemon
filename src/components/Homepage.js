import Footer from "../components/Footer.js";
import Hero from "../components/Hero.js"
import Highlights from "../components/Highlights.js"
import Testimonials from '../components/Testimonials';
import About from '../components/About'
import { ChakraProvider } from "@chakra-ui/react";

const Homepage = () => {
    return (
        <ChakraProvider>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
            <Footer />
        </ChakraProvider>
    )
}

export default Homepage;
import React from "react";
import {Box, HStack} from "@chakra-ui/react";
import Lee from "../images/lee.png";
import Ashanty from "../images/ashanty.png";
import Paul from "../images/paul.png";
import Bela from "../images/bela.png";
import StarIcon from "../images/staricon.png";
import Ravatar from "./Ravatar";

const propavatar = [
    {
        name: "Lee",
        staricon: StarIcon,
        imageSrc: Lee,
    },
    {
        name: "Ashanty",
        staricon: StarIcon,
        imageSrc: Ashanty,
    },
    {
        name: "Paul",
        staricon: StarIcon,
        imageSrc: Paul,
    },
    {
        name: "Bela",
        staricon: StarIcon,
        imageSrc: Bela,
    }
]


const Testimonials = () => {
    return (
        <Box>
            <HStack
            display="flex"
            margin="10%"
            justifyContent="space-evenly"
            backgroundColor="#EDEFEE99"
            >
                {propavatar.map((propavatar) => (
                    <Ravatar
                        name={propavatar.name}
                        staricon={propavatar.staricon}
                        imageSrc={propavatar.imageSrc}
                    />
                ))}
            </HStack>
        </Box>
    )
}

export default Testimonials;
import React from "react";
import {Box, HStack, Stack} from "@chakra-ui/react";
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
        name: "Bella",
        staricon: StarIcon,
        imageSrc: Bela,
    }
]


const Testimonials = () => {
    return (
        <Stack p={90} bgColor='#EDEFEE99'>
        <Box>
            <HStack
            display="flex"
            margin="10%"
            justifyContent="space-evenly"
            backgroundColor="#EDEFEE99"
            direction={['column', 'column', 'row']}
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
        </Stack>
    )
}

export default Testimonials;
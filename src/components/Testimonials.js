import React from "react";
import {Box, Stack} from "@chakra-ui/react";
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
        <Box bg='#EDEFEE' p={{base : '10%', sm: '30%', md: '15%'}}>
            <Box>
                <Stack
                    display="flex"
                    direction={['column', 'column', 'row']}
                    justify='center'
                >
                    {propavatar.map((propavatar) => (
                        <Ravatar
                            name={propavatar.name}
                            staricon={propavatar.staricon}
                            imageSrc={propavatar.imageSrc}
                        />
                    ))}
                </Stack>
            </Box>
        </Box>
    )
}

export default Testimonials;
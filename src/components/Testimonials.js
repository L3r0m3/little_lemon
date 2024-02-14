import React from "react";
import {Box, Stack} from "@chakra-ui/react";
import { propavatar } from "../data";
import Ravatar from "./Ravatar";


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
                            key={propavatar.id}
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
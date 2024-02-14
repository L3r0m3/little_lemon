import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { propavatar } from "../lib/data";
import Aavatar from "./Avatar";


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
                        <Aavatar
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
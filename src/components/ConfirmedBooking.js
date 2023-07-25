import React from "react";
import {
    Stack,
    VStack,
    Image,
    Text,
    ChakraProvider,
    Heading
} from "@chakra-ui/react";

import CheckmarkImg from '../images/checkmark.png';

const ConfirmedBooking = () => {
    return (
        <ChakraProvider>
        <Stack  direction='row' justifyContent='center'>
            <VStack>
                <Heading mt={20}>Reservation Conformation</Heading>
                <Image m={20} h={220} w={220} src={CheckmarkImg}/>
                <Text fontWeight='bold' fontSize={30}>Thank You! That's all.</Text>
                <Text fontSize={20}>Your reservation has been confirmed.</Text>
            </VStack>
        </Stack>
        </ChakraProvider>
    )
};

export default ConfirmedBooking;
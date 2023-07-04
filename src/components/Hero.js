import React from "react";
import HeroImage from "../images/four-bruchetta2.png"
import {Button, Heading, Image, VStack, Stack, Box, Text } from "@chakra-ui/react";

const Hero = () => {
    return (
        <Box alignItems='center' bg='#495E57'>
            <Stack
            display='flex'
            direction={['column', 'column','row']}
            justify='center'
            p={10}
            >
                <VStack alignItems='flex-start' justify='center' boxSize='md'>
                <Heading color='#F4CE14'>Little Lemon</Heading>
                <Text fontWeight='bold' fontSize='sm'>Chicago</Text>
                <Text fontSize={{sm: 'xl', md:'2xl'}} maxW={300} noOfLines={5}>We are a family owned Mediterranean
                    restaurant, focused on traditional recipes
                    served with a modern twist.</Text>
                <Box pt={10}>
                    <Button bg='#F4CE14' _hover={{bg: 'green',}}>Reserve a table</Button>
                </Box>
                </VStack>
                <Image borderRadius='16px' m={5} src={HeroImage} minW='256' minH='292'></Image>
            </Stack>
        </Box>
    )
}

export default Hero;
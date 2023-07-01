import React from "react";
import {Box, HStack,Link, Stack, Image, Flex} from "@chakra-ui/react";
import Logo from '../images/little_logo.png'


const Header = () => {
    return (
        <Box margin='5%' justify='center'>
            <Flex justify='center'>
            <HStack>
            <Image w='130px' h='50px' src={Logo}></Image>
                <Link fontWeight={400} fontSize={20} color='black' ml='20px' textDecoration='none' href="#/Home">Home</Link>
                <Link fontWeight={400} fontSize={20} color='black' ml='20px' textDecoration='none' href="#/About">About</Link>
                <Link fontWeight={400} fontSize={20} color='black' ml='20px' textDecoration='none' href="#/Menu">Menu</Link>
                <Link fontWeight={400} fontSize={20} color='black' ml='20px' textDecoration='none' href="#/Reservation">Reservation</Link>
                <Link fontWeight={400} fontSize={20} color='black' ml='20px' textDecoration='none' href="#/Order Online">Order Online</Link>
                <Link fontWeight={400} fontSize={20} color='black' ml='20px' textDecoration='none' href="#/Login">Login</Link>
            </HStack>
            </Flex>
        </Box>
    )

}

export default Header;
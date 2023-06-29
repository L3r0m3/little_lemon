import React from "react";
import {Image, Box, Text, HStack, VStack} from "@chakra-ui/react";

const Ravatar = ({name, staricon, imageSrc}) => {
    return (
        <Box>
            <VStack>
                <Text fontWeight="bold">Rating</Text>
                <HStack>
                    <Image width='100' height='100'  src={imageSrc}></Image>
                    <Text>{name}</Text>
                </HStack>
                <HStack>
                <Image width='20px' height="20" src={staricon}></Image>
                <Image width='20px' height="20" src={staricon}></Image>
                <Image width='20px' height="20" src={staricon}></Image>
                <Image width='20px' height="20" src={staricon}></Image>
                </HStack>
            </VStack>
        </Box>
    )
}

export default Ravatar;
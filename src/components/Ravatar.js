import React from "react";
import {Image, Box, Text, HStack, VStack,Stack} from "@chakra-ui/react";

const Ravatar = ({name, staricon, imageSrc}) => {
    return (
        <Stack ml={20}>
            <Box alignItems='flex-start'>
                <VStack>
                    <HStack>
                        <Image width='100' height='100'  src={imageSrc}></Image>
                        <Text>{name}</Text>
                    </HStack>
                    <HStack>
                        <Image width='20px' height="20px" src={staricon}></Image>
                        <Image width='20px' height="20px" src={staricon}></Image>
                        <Image width='20px' height="20px" src={staricon}></Image>
                        <Image width='20px' height="20px" src={staricon}></Image>
                    </HStack>
                </VStack>
            </Box>
        </Stack>
    )
}

export default Ravatar;
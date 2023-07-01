import React from "react";
import { Heading, Image, Box, Text,Flex} from "@chakra-ui/react";
import Mario from '../images/Mario and Adrian A.jpg';
import Adrian from '../images/Mario and Adrian b.jpg';

const About = () => {
     return (
        <Box>
            <Box
            as='section'
            p={100}
            bg='#495E57'
            spacing='25px'
            >
                <Flex justify='center' direction={['column', 'column', 'row']}>
                    <Box w='300px'>
                        <Heading>Little Lemon</Heading>
                        <Text fontWeight='bold'>Chicago</Text>
                        <Text noOfLines={5}>
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.
                        </Text>
                    </Box>
                    <Box>
                        <Image ml='20px' borderRadius={16} boxSize='250px' src={Mario}></Image>
                    </Box>
                    <Box>
                        <Image ml='20px' borderRadius={16} boxSize='250px' src={Adrian}></Image>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default About;
import React from "react";
import { Heading, Image, Box, Text, Stack, VStack} from "@chakra-ui/react";
import Mario from '../images/Mario and Adrian A.jpg';
import Adrian from '../images/Mario and Adrian b.jpg';

const About = () => {
     return (
            <Box bg='#495E57'>
                <Stack
                    display='flex'
                    direction={['column', 'column', 'row']}
                    textAlign={['left', 'left', 'left']}
                    p={{base : '10%', sm: '5%', md: '10%'}}
                >
                    <VStack alignItems='flex-start' m={10}>
                        <Heading>Little Lemon</Heading>
                        <Text fontWeight='bold'>Chicago</Text>
                        <Text
                            fontSize={20}
                            minW={300}
                            maxW={800}
                            noOfLines={8}
                        >
                            At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing.
                        </Text>
                    </VStack>
                    <Box>
                        <Image
                            minW={312}
                            minH={312}
                            w={525}
                            h={290}
                            borderRadius={16}
                            src={Mario}>
                        </Image>
                    </Box>
                    <Box>
                        <Image
                            minW={312}
                            minH={312}
                            w={525}
                            h={290}
                            borderRadius={16}
                            src={Adrian}>
                        </Image>
                    </Box>
                </Stack>
            </Box>
    )
}

export default About;
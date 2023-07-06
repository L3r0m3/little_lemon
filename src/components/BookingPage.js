import Nav from './Nav';
import React from 'react';

import {
    ChakraProvider,
    Image,
    Box,
    Stack,
    Text,
    VStack,
    Link,
    Button,
    Flex,
    Select,
    HStack,
    Input,
    Radio, RadioGroup} from "@chakra-ui/react";
import TableImage from '../images/little-table.jpg'
import TableSvg1 from '../images/dining-table1.png'
import TableSvg2 from '../images/dining-table.png'
import NewYork from '../images/newyork.jpg'


const BookingPage = () => {
    const [value, setValue] = React.useState('1')

    return (
        <ChakraProvider>
            <Nav />
            <Stack>
                <Box
                    display='grid'
                    bg="#495E57"
                    direction={['column', 'column', 'row']}
                    justify='center'
                >
                    <Box alignItems='center' display={{ md: 'flex' }} m={10}>
                        <Box flexShrink={0}>
                            <Image w='420px' h='350' src={TableImage}></Image>
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <Text fontWeight='bold'>Reserve table</Text>
                            <Text fontSize='xl' maxW={320} mt={5}>
                                Secure your dining experience with our convenient restaurant table reservation service.
                                Enjoy peace of mind knowing your preferred table will be ready upon arrival,
                                allowing you to savor every moment without any hassle. Cancel at any time.
                            </Text>
                        </Box>
                    </Box>
                    <HStack justify='flex-end'>
                    <Box
                     alignItems='center'
                     align='left'
                     display={{ md: 'flex' }}
                     m={5}>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <Text fontWeight='bold'>Our locations</Text>
                            <Text
                             fontSize='xl'
                             minW={320}
                             maxW={420}
                             mt={5}
                             >
                                Experience our restaurant's culinary delights in your preferred city location.
                                Choose from our three vibrant locations,
                                each offering a unique ambiance and culinary experience.
                            </Text>
                        </Box>
                        <Box>
                            <Image  w={320} h={420} src={NewYork}></Image>
                        </Box>
                    </Box>
                    </HStack>
                </Box>
            </Stack>
            <Stack>
                <Box>
                    <Flex
                        justify='space-evenly'
                        bg='#F9F9F9'
                        p={20}
                        display='flex'
                        direction={['column', 'column', 'row']}
                    >
                        <VStack>
                            <Text fontWeight='bold' m={5}>1-4 Seat</Text>
                            <Box m={5}>
                                <Image maxW={90} maxH={90} src={TableSvg1}></Image>
                            </Box>
                        </VStack>
                        <Box>
                            <Select
                             isRequired
                             mb={1}
                             bg='#F4CE14'
                             placeholder='Number of Diners'
                            >
                                <option value='option1'>1</option>
                                <option value='option2'>2</option>
                                <option value='option3'>3</option>
                                <option value='option3'>4</option>
                                <option value='option3'>5</option>
                                <option value='option3'>6</option>
                                <option value='option3'>7</option>
                                <option value='option3'>8</option>
                            </Select>
                            <Input isRequired
                                placeholder="Select Date and Time"
                                size="md"
                                mb={1}
                                bg='#F4CE14'
                                type="datetime-local"
                            />
                            <Select mb={1} bg='#F4CE14' placeholder='Location'>
                                <option value='option1'>New York</option>
                                <option value='option2'>Chicago</option>
                                <option value='option3'>Springfield</option>
                            </Select>
                            <Select mb={1} bg='#F4CE14' placeholder='Occation'>
                                <option value='option1'>Birthday</option>
                                <option value='option2'>Engagement</option>
                                <option value='option3'>Anniversary</option>
                            </Select>
                            <Text mb={1} fontSize={18}>Seating Option</Text>
                            <RadioGroup onChange={setValue} value={value}>
                                <Stack direction='row'>
                                    <Radio value='1'>Standard</Radio>
                                    <Radio value='2'>Outside</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                        <VStack>
                            <Text fontWeight='bold' m={5}>5-8 Seat</Text>
                            <Box m={5}>
                                <Image maxW={90} maxH={90} src={TableSvg2}></Image>
                            </Box>
                        </VStack>
                    </Flex>
                </Box>
                <Flex m={20} justify='center'>
                    <Link href='/booking-details'>
                        <Button borderRadius={16} minW={400} bg='#F4CE14'>Continue</Button>
                    </Link>
                </Flex>
            </Stack>
        </ChakraProvider>
    )
}

export default BookingPage;
import {React} from 'react';

import {
    ChakraProvider,
    Image,
    Box,
    Stack,
    Text,
    VStack,
    Flex,
    HStack,
  } from "@chakra-ui/react";

import TableImage from '../images/little-table.jpg';
import TableSvg1 from '../images/dining-table1.png';
import TableSvg2 from '../images/dining-table.png';
import NewYork from '../images/newyork.jpg';
import BookingForm from './BookingForm';


const BookingPage = ({availableTimes, SubmitForm, state, dispatch, handleChange}) => {

    return (
        <ChakraProvider>
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
                            <Image w={320} h={420} src={NewYork}></Image>
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
                                <Image
                                 maxW={90}
                                 maxH={90}
                                 src={TableSvg1}>
                                </Image>
                            </Box>
                        </VStack>
                        <Stack data-testid="res-time">
                            <BookingForm SubmitForm={SubmitForm} state={state}  dispatch={dispatch} availableTimes={availableTimes} handleChange={handleChange}/>
                        </Stack>
                        <VStack>
                            <Text fontWeight='bold' m={5}>5-8 Seat</Text>
                            <Box m={5}>
                                <Image maxW={90} maxH={90} src={TableSvg2}></Image>
                            </Box>
                        </VStack>
                    </Flex>
                </Box>
                {/* <Flex m={20} justify='center'>
                    <Link href='/booking-details'>
                        <Button borderRadius={16} minW={400} bg='#F4CE14'>Continue</Button>
                    </Link>
                </Flex> */}
            </Stack>
        </ChakraProvider>
    )
}

export default BookingPage;
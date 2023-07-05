import Nav from './Nav';
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
    Select} from "@chakra-ui/react";
import TableImage from '../images/little-table.jpg'
import TableSvg1 from '../images/dining-table1.png'
import TableSvg2 from '../images/dining-table.png'

const BookingPage = () => {
    return (
        <ChakraProvider>
            <Nav />
            <Stack>
                <Flex
                    p={10}
                    bg="#495E57"
                    direction={['column', 'column', 'row']}
                    justify='center'
                >
                    <Box>
                        <Image src={TableImage}></Image>
                    </Box>
                    <VStack>
                        <Box align='left' m={10}>
                            <Text fontWeight='bold'>Reserve table</Text>
                            <Text maxW={420} mt={5}>
                                Secure your dining experience with our convenient restaurant table reservation service.
                                Enjoy peace of mind knowing your preferred table will be ready upon arrival,
                                allowing you to savor every moment without any hassle. Cancel at any time.
                            </Text>
                        </Box>
                    </VStack>
                </Flex>
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
                        <Select bg='#F4CE14' placeholder='Number of Diners'>
                            <option value='option1'>1</option>
                            <option value='option2'>2</option>
                            <option value='option3'>3</option>
                            <option value='option3'>4</option>
                            <option value='option3'>5</option>
                            <option value='option3'>6</option>
                            <option value='option3'>7</option>
                            <option value='option3'>8</option>
                        </Select>
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
                    <Link>
                        <Button borderRadius={16} minW={400} bg='#F4CE14'>Date/Location</Button>
                    </Link>
                </Flex>
            </Stack>
        </ChakraProvider>
    )
}

export default BookingPage;
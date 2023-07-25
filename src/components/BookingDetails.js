import React from "react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
  Radio, RadioGroup,
  Stack,
  Text,
  NumberInput,
  NumberInputField,
  ChakraProvider,
} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { MdCreditCard } from 'react-icons/md'

const BookingDetails = () => {
  return (
        <ChakraProvider>
            <Stack
                display='grid'
                backgroundColor="#495E57"
                justify={['center', 'center', 'center']}
                py={100}
                spacing={8}
            >
                <VStack
                    minW={420}
                    maxW={320}
                    textColor='white'
                    alignItems="flex-start"
                    ml={20}
                >
                <Box
                    border='1px'
                    borderColor='gray.200'
                    p={3}
                    rounded="md"
                    w="100%"
                    maxW={['320', '560']}
                >
                <form>
                <Text fontSize={20} ml={5} as="h3">
                    Creditcard Details
                </Text>
                    <VStack spacing={4}>
                    <FormControl isRequired>
                        <FormLabel htmlFor="firstLastName">First name/Last name</FormLabel>
                        <Input
                        textColor='black'
                        bg='white'
                        id="firstLastName"
                        name="firstLastName"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="lastName">Card Number</FormLabel>
                        <Input
                        bg='white'
                        textColor='black'
                        type='number'
                        />
                    </FormControl>
                        <HStack>
                            <FormControl >
                                <FormLabel htmlFor="Exp Date">Exp Date</FormLabel>
                                <Input
                                textColor='black'
                                bg='white'
                                type="date"
                                htmlSize={4} width='auto'
                            />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="CVV">CVV</FormLabel>
                                <NumberInput min={3}>
                                    <NumberInputField color='black' bg='white' maxW={20} />
                                </NumberInput>
                            </FormControl>
                            <Icon mt={5} w={10} h={20} as={MdCreditCard} />
                        </HStack>
                        <VStack>
                            <RadioGroup defaultValue='2'>
                                <VStack spacing={5} direction='row'>
                                    <HStack>
                                        <Text>Send me booking comfirmation via email</Text>
                                        <Radio colorScheme='red' value='1' />
                                    </HStack>
                                    <HStack>
                                        <Text>Send me booking comfirmation via SMS</Text>
                                        <Radio colorScheme='green' value='2' />
                                    </HStack>
                                </VStack>
                            </RadioGroup>
                        </VStack>
                        <Button
                            fontWeight='bold'
                            type="submit"
                            bg="#F4CE14"
                            width="full"
                        >Book
                        </Button>
                    </VStack>
                </form>
                </Box>
            </VStack>
            </Stack>
        </ChakraProvider>
    );
};

export default BookingDetails;

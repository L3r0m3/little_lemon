import { React, useState } from "react";

import {
    Box,
    Heading,
    HStack,
    Text,
    VStack,
    Stack,
    Link,
    Button,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    FormErrorMessage,
    ChakraProvider,
    InputGroup,
    InputRightElement
    } from "@chakra-ui/react";

    import {GoogleIcon,
         FacebookIcon,
         AppleIcon,
         LinkedinIcon
        } from '../Icons/SocialIcon';

const LoginPage = () => {
        const [input, setInput] = useState('');
        const handleInputChange = (e) => setInput(e.target.value);
        const isError = input === '';
        const [show, setShow] = useState(false);
        const handleClick = () => setShow(!show);

    return (
        <ChakraProvider>
            <Stack
             display='grid'
             bg='#495E57'
             py={100}
             spacing={8}
             justify={['center', 'center', 'center']}
            >
                <Heading ml={100} >Login</Heading>
                <HStack display='flex' justify='center'>
                    <Link><Button bg='#F4CE14'>Login</Button></Link>
                    <Link><Button bg='#EE9972'>Sign Up</Button></Link>
                </HStack>
                <Box
                    border='1px'
                    borderColor='gray.200'
                    p={3}
                    rounded="md"
                    w="100%"
                    maxW={['320', '560']}
                    >
                    <VStack>
                    <FormControl isInvalid={isError}>
                        <FormLabel color='white'>Email</FormLabel>
                        <Input
                         bg='white'
                         type='email'
                         placeholder="Enter email"
                         value={input}
                         onChange={handleInputChange}
                        />
                        {!isError ? (
                            <FormHelperText color='red'>
                                Enter email
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                        </FormControl>
                        <FormControl>
                            <FormLabel color='white'>Password</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                bg='white'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                            <Link
                             color='#EE9972'
                             textAlign='left'
                             fontSize={13}>
                            Forgot password?</Link>
                        </FormControl>
                    </VStack>
                </Box>
                <Button bg='#F4CE14'>Login</Button>
                <HStack justify='center'>
                    <Text>Create account</Text>
                    <Link color='#EE9972'>Signup now</Link>
                </HStack>
                <HStack justify='center'>
                    <GoogleIcon fontSize={30} />
                    <FacebookIcon ml={3} fontSize={30} />
                    <LinkedinIcon ml={3} fontSize={30} />
                    <AppleIcon ml={3} fontSize={30} />
                </HStack>
            </Stack>
        </ChakraProvider>
    )
}

export default LoginPage;
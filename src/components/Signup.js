import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  Stack,
  ChakraProvider,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from '../hooks/useSubmit.js'


const Signup = () => {
  const { isLoading, submit } = useSubmit();


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      comment: ''
    },
    onSubmit: (values) => {
      submit('', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string()
      .min(25, "Must be at least 25 characters")
    }),
  });


  return (
    <ChakraProvider>
    <Stack
      display='grid'
      backgroundColor="#495E57"
      justify={['center', 'center', 'center']}
      py={10}
      spacing={8}
    >
      <VStack
        minW={420}
        maxW={800}
        textColor='white'
        alignItems="flex-start"
      >
        <Heading ml={5} as="h1" id="signup-section">
          Signup to collect points
        </Heading>
        <Box
         border='1px'
         borderColor='gray.200'
         p={3}
         rounded="md"
         w="100%"
        >
          <form onSubmit={formik.handleSubmit}
          >
            <VStack spacing={4}>
              <FormControl isRequired isInvalid={!!formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">First name</FormLabel>
                <Input
                  textColor='black'
                  bg='white'
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="lastName">Last name</FormLabel>
                <Input
                  bg='white'
                  textColor='black'
                  id="lastName"
                  name="lastName"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!formik.touched.phoneNumber && formik.errors.phoneNumber}>
                <FormLabel htmlFor="lastName">Phone Number</FormLabel>
                <Input
                  bg='white'
                  textColor='black'
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  textColor='black'
                  bg='white'
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!formik.touched.password && formik.errors.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                 textColor='black'
                 bg='white'
                 id="password"
                 name="password"
                 type="password"
                 onChange={formik.handleChange}
                 value={formik.values.password}
                 onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="comment">Add a special request (optional)</FormLabel>
                <Textarea
                  textColor='black'
                  bg='white'
                  id="comment"
                  name="comment"
                  height={120}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...formik.getFieldProps("comment")}
                />
              </FormControl>
              <Button
                type="submit"
                bg="#F4CE14"
                width="full"
                isLoading={isLoading}
              > Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Stack>
  </ChakraProvider>
  );
};

export default Signup;

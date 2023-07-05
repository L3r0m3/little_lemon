import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Stack,
  Icon
  } from "@chakra-ui/react";
import { MdBikeScooter } from 'react-icons/md'
import React from "react";

const Card = ({ price, title, description, imageSrc }) => {

  return (
        <Stack p={2}>
          <Box maxW={270}>
            <Image
              borderTopRadius={16}
              w='270'
              h='201'
              src={imageSrc}
              alt={title}
            />
            <VStack bg='#F9F9F9' spacing={3} align="flex-start">
              <HStack justify='space-between'>
                <Heading
                  pt={3}
                  as="h5"
                  size="md"
                  mb={2}
                  >{title}
                </Heading>
                <Text
                  ml={19}
                  mt={3}
                  fontWeight='bold'
                  as="h5"
                  color="red"
                  size="md"
                  mb={2}
                  >{price}
                </Text>
              </HStack>
                <Text noOfLines={5} maxWidth={200}>{description}</Text>
              <HStack>
                <Text fontWeight="bold" fontSize="12px">Order a delivery</Text>
                <Icon ml={5} as={MdBikeScooter}></Icon>
              </HStack>
            </VStack>
          </Box>
        </Stack>
  )
};

export default Card;

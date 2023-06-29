import { Box, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import React from "react";

const Card = ({ price, title, description, imageSrc }) => {

  return (
        <Box w="17%"
        >
          <Image boxSize='200px' src={imageSrc} alt={title}/>
          <VStack spacing={3} p={4} alignItems="flex-start">
            <Heading as="h5" size="md" mb={2}>{title}</Heading>
            <Heading as="h5" color="red" size="md" mb={2}>{price}</Heading>
            <Text noOfLines={5} maxWidth={200}>{description}</Text>
          </VStack>
          <HStack>
            <Text fontWeight="bold" fontSize="12px">Order a delivery</Text>
          </HStack>
        </Box>
  )
};

export default Card;

import React from "react";
import Card from "./Card";
import { specials } from "../lib/data";
import {
    Button,
    Box,
    Text,
    HStack,
    Stack} from "@chakra-ui/react";

const Highlights = () => {
    return (
        <Box m={20}>
            <Box>
                <HStack p={5} justify='space-around'>
                    <Box>
                        <Text
                            fontWeight="bold"
                            fontSize="25px"
                            >This Week Specials!
                        </Text>
                    </Box>
                    <Box>
                        <Button
                            backgroundColor="#F4CE14"
                            >Online Menu
                        </Button>
                    </Box>
                </HStack>
                <Stack
                    display="flex"
                    direction={['column', 'column', 'row']}
                    justify='center'
                >
                        {specials.map((special) => (
                        <Card
                            price={special.price}
                            key={special.title}
                            title={special.title}
                            description={special.description}
                            imageSrc={special.imageSrc}
                        />
                        ))}
                </Stack>
            </Box>
        </Box>
    )
}

export default Highlights;
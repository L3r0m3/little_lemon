import React from "react";
import { Button, Box, Text, HStack, Stack} from "@chakra-ui/react";
import Greeksalad from "../images/greek-salad.png"
import Bruchetta from "../images/cheese-bruchetta.png"
import Lemondessert from "../images/lemon-dessert.jpg"
import Card from "./Card";

const specials = [
    {
        title: "Greek salad",
        price: "$ 12.99",
        description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
        imageSrc: Greeksalad,
    },
    {
        title: "Bruchetta",
        price: "$ 5.99",
        description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
        imageSrc: Bruchetta,
    },
    {
        title: "Lemon dessert",
        price: "$ 4.99",
        description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
        imageSrc: Lemondessert,
    }
];

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
                        {specials.map((specials) => (
                        <Card
                            price={specials.price}
                            key={specials.title}
                            title={specials.title}
                            description={specials.description}
                            imageSrc={specials.imageSrc}
                        />
                        ))}
                </Stack>
            </Box>
        </Box>
    )
}

export default Highlights;
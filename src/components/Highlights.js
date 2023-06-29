import React from "react";
import { Button, Box, Text, HStack} from "@chakra-ui/react";
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
        <Box>
            <HStack margin="40px" display="flex" justifyContent="space-evenly">
                <Text fontWeight="bold" fontSize="25px">This Week Specials!</Text>
                <Button fontSize="18px"
                        width="150px"
                        height="40px"
                        border="none"
                        backgroundColor="#F4CE14"
                        borderRadius="16px"
                >
                    Online Menu
                </Button>
            </HStack>
            <Box
                display="flex"
                justifyContent="center"
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
            </Box>
        </Box>
    )
}

export default Highlights;
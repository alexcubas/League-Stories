import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaMusic } from "react-icons/fa";
import { useState } from "react";

export default function SoundComponent() {
    const [showAudio, setShowAudio] = useState(false);

    return (
        <Box
            position={"absolute"}
            right={0}
            as={motion.div}
            onMouseEnter={() => setShowAudio(true)}
            onMouseLeave={() => setShowAudio(false)}
        >
            <Flex
                bg={"#56aeff"}
                borderLeftRadius={"5px"}
                padding={"7px"}
                display={!showAudio ? "flex" : "none"}
            >
                <FaMusic size={"25px"} cursor={"pointer"} color={"white"} />
            </Flex>
            <audio
                src={"WhatCouldHaveBeen.mp3"}
                controls={showAudio}
                className={"audio-1"}
            />
        </Box>
    );
}

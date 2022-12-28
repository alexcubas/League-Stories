import { Flex, useBreakpointValue, Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

import { useEffect, useState } from "react";
import { HeaderDesktop } from "../components/Header/HeaderDesktop";
import { Layout } from "../components/layout";
import SoundComponent from "../components/patterns/soundComponent";
import SearchByNamePlayer from "../components/useData/searchByName";

export default function leagueStats() {
    const [isOpen, setOpen] = useState(false);

    const isWideVersion = useBreakpointValue({
        base: false,
        xs: false,
        sm: false,
        md: false,
        lg: true,
        xl: true,
    });

    const controls = useAnimation();

    useEffect(() => {
        !isOpen
            ? controls.start({
                  width: "350px",
                  marginTop: "0px",
                  height: "600px",
                  opacity: 1,
                  transition: { duration: 0.8 },
              })
            : controls.start({
                  width: "92%",
                  marginTop: "80px",
                  height: "800px",
                  opacity: 0.7,
                  transition: { duration: 3 },
              });
    }, [isOpen]);

    return (
        <Layout
            direction="column"
            mb="0px"
            mt={!isWideVersion ? "70px" : "0px"}
            className={"Layout"}
        >
            <HeaderDesktop />
            <Flex
                h="full"
                w={"full"}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
            >
                <Flex
                    as={motion.div}
                    ml={"70px"}
                    width="350px"
                    height="600px"
                    borderRadius="25px"
                    bg="white"
                    initial="hidden"
                    animate={controls}
                    justifyContent="center"
                    // onClick={() => setOpen(!isOpen)}
                >
                    <SearchByNamePlayer />
                </Flex>
                <SoundComponent />
            </Flex>
        </Layout>
    );
}

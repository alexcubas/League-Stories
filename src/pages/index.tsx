import { Flex, useBreakpointValue, Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

import { useEffect, useState } from "react";
import { HeaderDesktop } from "../components/Header/HeaderDesktop";
import { Layout } from "../components/layout";
import SoundComponent from "../components/patterns/soundComponent";
import EloStatusBox from "../components/useData/eloStatus";
import SearchByNamePlayer from "../components/useData/searchByNamePlayer";
import { EloPlayerType } from "../types/eloPlayerType";

export default function leagueStats() {
    const [isOpen, setOpen] = useState(true);
    const [playerEloData, setPlayerEloData] = useState<EloPlayerType[]>(
        {} as EloPlayerType[]
    );

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
                  opacity: 0.9,
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
                // onClick={() => setOpen(!isOpen)}
            >
                <Flex
                    as={motion.div}
                    width="350px"
                    ml={"70px"}
                    height="600px"
                    borderRadius="25px"
                    bgGradient="linear(to-l, #ebd4f7, #fffdc9, #fcd4e8)"
                    initial="hidden"
                    animate={controls}
                    _hover={{
                        boxShadow: "0px 0px 10px 5px rgba(0, 255, 117, 0.30)",
                    }}
                >
                    <SearchByNamePlayer
                        setIsOpen={setOpen}
                        playerEloData={playerEloData}
                        setPlayerEloData={setPlayerEloData}
                    />
                    <Flex
                        w={"1px"}
                        h={"95%"}
                        alignSelf={"center"}
                        bgGradient={
                            "linear-gradient(360deg, rgba(255,255,255,0) 0%, rgba(159,4,122,0.5410539215686274) 15%, rgba(159,4,122,0.8379726890756303) 28%, rgba(159,4,122,1) 51%, rgba(159,4,122,0.8463760504201681) 73%, rgba(159,4,122,0.47942927170868344) 85%, rgba(255,255,255,0) 100%)"
                        }
                    />
                    <Flex justify={"center"} w={"100%"} h={"95%"}>
                        {/* <EloStatusBox rankInfos={playerEloData[0]} /> */}
                    </Flex>
                </Flex>
                <SoundComponent />
            </Flex>
        </Layout>
    );
}

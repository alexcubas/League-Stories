import {
    Flex,
    Input,
    Text,
    Button,
    useBreakpointValue,
    Box,
    Image,
    Container,
    keyframes,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { HeaderDesktop } from "../components/Header/HeaderDesktop";
import { Layout } from "../components/layout";
import ButtonComponent from "../components/patterns/buttonComponent";
import { getProductsByName } from "../hooks/useGetSummerByName";

export default function leagueStats() {
    const [summonerName, setSummonerName] = useState<string>("");
    const [playerData, setPlayerData] = useState<any>(null);
    const [isOpen, setOpen] = useState(false);

    async function searchForPlayer() {
        const summoner = await getProductsByName(summonerName);
        setPlayerData(summoner);
    }

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
                  transition: { duration: 2 },
              })
            : controls.start({
                  width: "92%",
                  marginTop: "80px",
                  height: "800px",
                  opacity: 0.7,
                  transition: { duration: 3 },
              });
    }, [isOpen]);

    // setTimeout(function () {
    //     Aos.init({
    //         once: true,
    //         duration: 1500,
    //     });
    // }, 100);

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
                <Box
                    as={motion.div}
                    ml={"70px"}
                    width="50px"
                    height="600px"
                    borderRadius="25px"
                    bg="white"
                    initial="hidden"
                    animate={controls}
                    onClick={() => setOpen(!isOpen)}
                />
            </Flex>
            {/* <Flex data-aos="fade-up">
                <Flex w={"100px"} h={"100px"} bg={"red"}>
                    aaaaaa
                </Flex>
            </Flex> */}
            {/* <Flex direction={"column"} rowGap={"1rem"}>
                <Text fontSize={"35px"} textStyle={"JBold"}>
                    League of legends
                </Text>
                <Input
                    value={summonerName}
                    onChange={(e) => setSummonerName(e.target.value)}
                />
                <ButtonComponent
                    text={"Procure o jogador"}
                    func={() => searchForPlayer()}
                />
            </Flex>
             {playerData && <Text>{playerData?.summonerLevel}</Text>} */}
        </Layout>
    );
}

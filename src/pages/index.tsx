import {
    Flex,
    Input,
    Text,
    Button,
    useBreakpointValue,
    Box,
    Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HeaderDesktop } from "../components/Header/HeaderDesktop";
import { Layout } from "../components/layout";
import ButtonComponent from "../components/patterns/buttonComponent";
import { getProductsByName } from "../hooks/useGetSummerByName";

// import "aos/dist/aos.css";
// import Aos from "aos";

export default function leagueStats() {
    const [summonerName, setSummonerName] = useState<string>("");
    const [playerData, setPlayerData] = useState<any>(null);

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

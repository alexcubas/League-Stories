import { Flex, Text, Input } from "@chakra-ui/react";
import { useState } from "react";
import { getProductsByName } from "../../hooks/useGetSummerByName";
import { userByName } from "../../types/userByName";
import ButtonComponent from "../patterns/buttonComponent";
import InputComponent from "../patterns/inputComponent";
import TextHeader from "../patterns/TextHeader";

export default function SearchByNamePlayer() {
    const [playerData, setPlayerData] = useState<userByName | undefined>(
        undefined
    );

    const [summonerName, setSummonerName] = useState<string>("");

    async function searchForPlayer() {
        const summoner = await getProductsByName(summonerName);
        setPlayerData(summoner);
    }

    return (
        <Flex
            direction={"column"}
            rowGap={"1rem"}
            w={"90%"}
            h={"90%"}
            alignItems={"center"}
        >
            <Text
                mt={"15px"}
                fontSize={"35px"}
                textStyle={"JBold"}
                textAlign={"center"}
                textColor={"white"}
                textShadow={
                    "5px 5px 10px purple, 0 0 0.7em red, 0 0 0.2em blue"
                }
            >
                Encontre seu invocador
            </Text>
            <Flex mt={"15px"}>
                <InputComponent text={summonerName} setText={setSummonerName} />
                <ButtonComponent func={() => searchForPlayer()} />
            </Flex>
            {playerData && <Text>{playerData?.summonerLevel}</Text>}
        </Flex>
    );
}

import { Flex, Text, Input, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProductsByName } from "../../hooks/useGetSummerByName";
import { IUserByName } from "../../types/userByName";
import ButtonComponent from "../patterns/buttonComponent";
import InputComponent from "../patterns/inputComponent";
import Lottie from "lottie-react";
import { poroDancing, loadingAnim } from "../../../public/lottie";
import IconLevelImg from "../patterns/iconWithLevelImg";
import TextWithShadow from "../patterns/TextWithShadow";
import { getDataById } from "../../hooks/useGetSummonerById";

type searchName = {
    setIsOpen: any;
};

export default function SearchByNamePlayer({ setIsOpen }: searchName) {
    const [playerData, setPlayerData] = useState<IUserByName>(
        {} as IUserByName
    );
    const [playerEloData, setPlayerEloData] = useState<IUserByName>(
        {} as IUserByName
    );
    const [summonerName, setSummonerName] = useState<string>("");
    const [searchingSummoner, setSearchingSummoner] = useState<boolean>(false);

    async function searchForPlayer() {
        setSearchingSummoner(true);
        const summoner = await getProductsByName(summonerName);
        if (summoner) {
            console.log("summoner", summoner);
            setPlayerData(summoner);
        }
        setSearchingSummoner(false);
    }

    const fetchPlayerElo = async () => {
        if (playerData?.id) {
            const rankPlayer = await getDataById(playerData?.id);
            setPlayerEloData(rankPlayer);
            console.log("rankPlayer", rankPlayer);
        }
    };

    useEffect(() => {
        fetchPlayerElo();
    }, [playerData]);

    return (
        <Flex>
            <Flex
                direction={"column"}
                width="350px"
                height="600px"
                alignItems={"center"}
                alignSelf={"center"}
                justifyContent={"space-between"}
            >
                <Flex direction={"column"} alignItems={"center"}>
                    <TextWithShadow mt={"15px"} text="Encontre seu invocador" />

                    <Flex mt={"15px"} w={"90%"}>
                        <InputComponent
                            text={summonerName}
                            setText={setSummonerName}
                        />
                        <ButtonComponent func={() => searchForPlayer()} />
                    </Flex>
                </Flex>
                {playerData?.summonerLevel ? (
                    <Flex direction={"column"} gap={"50px"}>
                        <IconLevelImg
                            iconId={playerData?.profileIconId}
                            summonerLevel={playerData?.summonerLevel}
                        />
                        <TextWithShadow
                            text={playerData?.name}
                            mt={"-10px"}
                            textShadow={
                                "2px 2px 50px pink, 0 0 0.5em red, 0 0 0.2em blue"
                            }
                        />
                        {/* <Text textAlign={"center"}>{playerData?.name}</Text> */}
                    </Flex>
                ) : (
                    <Flex width={"250px"} height={"250px"}>
                        {!searchingSummoner && !playerData?.id && (
                            <Lottie animationData={poroDancing} />
                        )}
                        {searchingSummoner && (
                            <Lottie animationData={loadingAnim} />
                        )}
                    </Flex>
                )}

                <Flex></Flex>
            </Flex>
        </Flex>
    );
}

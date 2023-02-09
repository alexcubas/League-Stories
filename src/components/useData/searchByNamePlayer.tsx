import { Flex, Text, Input, Image } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getProductsByName } from "../../hooks/useGetSummerByName";
import { IUserByName } from "../../types/userByName";
import ButtonComponent from "../patterns/buttonComponent";
import InputComponent from "../patterns/inputComponent";
import Lottie from "lottie-react";
import { poroDancing, loadingAnim } from "../../../public/lottie";
import IconLevelImg from "../patterns/iconWithLevelImg";
import TextWithShadow from "../patterns/TextWithShadow";
import { getDataById } from "../../hooks/useGetSummonerById";
import { getSummonerHistoryByPUUID } from "../../hooks/useGetSummonerHistoryByPUUID";
import { getSummonerHistoryByMatchID } from "../../hooks/useGetSummonerHistoryByMatchID";
import { EloPlayerType } from "../../types/eloPlayerType";
import BoxFather from "../eloStatusComponent/boxFather";

type searchName = {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    playerEloData: any;
    setPlayerEloData: any;
};

export default function SearchByNamePlayer({
    setIsOpen,
    playerEloData,
    setPlayerEloData,
}: searchName) {
    const [playerData, setPlayerData] = useState<IUserByName>(
        {} as IUserByName
    );
    const [summonerName, setSummonerName] = useState<string>("");
    const [searchingSummoner, setSearchingSummoner] = useState<boolean>(false);
    async function searchForPlayer() {
        setSearchingSummoner(true);
        const summoner = await getProductsByName(summonerName);
        if (summoner) {
            setPlayerData(summoner);
        }
        setSearchingSummoner(false);
    }

    const fetchPlayerElo = async () => {
        console.log("playerData", playerData);
        if (playerData?.id) {
            const rankPlayer = await getDataById(playerData?.id);
            setPlayerEloData(rankPlayer);
            console.log("rankPlayer", rankPlayer);
        }
        if (playerData?.puuid) {
            const historyPlayer = await getSummonerHistoryByPUUID(
                playerData?.puuid
            );
            if (historyPlayer) {
                const historyMatch = await getSummonerHistoryByMatchID(
                    historyPlayer
                );
                console.log("historyMatch", historyMatch);
                historyMatch && setIsOpen(true);
            }
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
                height="100%"
                alignItems={"center"}
                alignSelf={"center"}
                justifyContent={"space-between"}
            >
                {!playerData?.summonerLevel && (
                    <Flex direction={"column"} alignItems={"center"}>
                        <TextWithShadow
                            mt={"15px"}
                            text="Encontre seu invocador"
                        />
                        <Flex mt={"15px"} w={"90%"}>
                            <InputComponent
                                text={summonerName}
                                setText={setSummonerName}
                                func={() => searchForPlayer()}
                            />
                            <ButtonComponent func={() => searchForPlayer()} />
                        </Flex>
                    </Flex>
                )}
                {playerData?.summonerLevel ? (
                    <BoxFather
                        playerData={playerData}
                        playerEloData={playerEloData}
                    />
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
            </Flex>
        </Flex>
    );
}

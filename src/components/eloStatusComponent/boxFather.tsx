import { Flex, Image, Text } from "@chakra-ui/react";
import IconLevelImg from "../patterns/iconWithLevelImg";
import TextWithShadow from "../patterns/TextWithShadow";
import { VictoryPie, VictoryLabel } from "victory";
import { useEffect, useState } from "react";
import { EloPlayerType } from "../../types/eloPlayerType";
import { IUserByName } from "../../types/userByName";

type BoxFatherType = {
    playerData: IUserByName;
    playerEloData: EloPlayerType[];
};

export default function BoxFather({
    playerData,
    playerEloData,
}: BoxFatherType) {
    const eloData = playerEloData[0];
    const [dataPercent, setDataPercent] = useState([0, 100]);
    const porcentWins =
        eloData?.wins &&
        ((eloData?.wins / (eloData?.wins + eloData?.losses)) * 100).toFixed(2);
    useEffect(() => {
        eloData?.wins && setDataPercent([eloData?.wins, eloData?.losses]); // Setting the data that we want to display
    }, [playerEloData]);
    const graphicColor = ["#5383E8", "#E84057"]; // Colors

    return (
        <Flex direction={"column"} gap={"50px"} mt={"80px"}>
            <Flex direction={"column"} gap={"30px"}>
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
            </Flex>
            <Flex
                direction={"column"}
                w={"100%"}
                justify={"center"}
                align={"center"}
            >
                {playerEloData[0]?.tier && (
                    <Image
                        src={`/ranked-emblems/Emblem_${playerEloData[0]?.tier}.png`}
                        w={"150px"}
                        h={"150px"}
                    />
                )}
            </Flex>
            <Flex w={"100%"} direction={"column"}>
                <Flex
                    w={"100%"}
                    fontSize={"12px"}
                    gap={"5px"}
                    justify={"center"}
                    align={"center"}
                    mb={"-5px"}
                >
                    <Flex bg={"#E84057"} w={"15px"} h={"5px"} />
                    <Text>{eloData?.losses} Derrotas</Text>
                    <Flex bg={"#5383E8"} w={"15px"} h={"5px"} />
                    <Text>{eloData?.wins} Vitórias</Text>
                </Flex>
                <Flex justify={"center"} align={"center"}>
                    <svg viewBox="0 0 400 400">
                        <VictoryPie
                            standalone={false}
                            animate={{ easing: "exp" }}
                            width={400}
                            data={dataPercent}
                            colorScale={graphicColor}
                            height={400}
                            padAngle={2}
                            innerRadius={100}
                            style={{
                                labels: {
                                    display: "none",
                                },
                            }}
                        />
                        <VictoryLabel
                            textAnchor="middle"
                            style={{
                                fontSize: "30px",
                            }}
                            x={200}
                            y={200}
                            text={porcentWins ? `${porcentWins}%` : "..."}
                        />
                    </svg>
                </Flex>
            </Flex>
        </Flex>
    );
}

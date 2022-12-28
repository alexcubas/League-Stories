import { Flex, Img, Text } from "@chakra-ui/react";

type iconLevel = {
    iconId: number;
    summonerLevel: number;
};

export default function IconLevelImg({ iconId, summonerLevel }: iconLevel) {
    return (
        <Flex align={"flex-end"} justify={"center"}>
            <Img
                borderRadius={"25px"}
                position={"relative"}
                w={"150px"}
                h={"150px"}
                src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${iconId}.png`}
            />
            <Flex
                bg={"white"}
                position={"absolute"}
                mb={"-12px"}
                padding={"2px 10px"}
                borderRadius={"25px"}
                border={"1px solid pink"}
                shadow={"3px 3px 6px pink, 0 0 0.4em red, 0 0 0.6em blue"}
            >
                <Text textColor={"pink"}>{summonerLevel}</Text>
            </Flex>
        </Flex>
    );
}

import { Flex, Image } from "@chakra-ui/react";
import { EloPlayerType } from "../../types/eloPlayerType";
import TextWithShadow from "../patterns/TextWithShadow";

type EloStatusBoxType = {
    rankInfos: EloPlayerType;
};

export default function EloStatusBox({ rankInfos }: EloStatusBoxType) {
    console.log("rankInfos", rankInfos);
    return (
        <Flex mt={"20px"} direction={"column"} h={"200px"} w={"95%"}>
            <TextWithShadow textAlign="start" text="Flexível" fontSize="25px" />
            {/* <Flex
                h={"160px"}
                w={"100%"}
                border={"1px solid black"}
                borderRadius={"25px"}
                px={"5px"}
                align={"center"}
            >
                <Image
                    src={`/ranked-emblems/Emblem_${rankInfos?.tier}.png`}
                    w={"150px"}
                    h={"150px"}
                />
            </Flex> */}
        </Flex>
    );
}

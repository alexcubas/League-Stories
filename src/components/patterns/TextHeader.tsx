import { Text, Flex } from "@chakra-ui/react";

type textHeader = {
    name: string;
    fontSize?: string;
};

export default function TextHeader({ name, fontSize }: textHeader) {
    return (
        <Text
            textShadow={"1px 1px 2px purple, 0 0 0.5em red, 0 0 0.5em blue"}
            textColor={"white"}
            fontSize={fontSize ? fontSize : "22px"}
        >
            {name}
        </Text>
    );
}

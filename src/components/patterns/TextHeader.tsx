import { Text, Flex } from "@chakra-ui/react";

type textHeader = {
    name: string;
};

export default function TextHeader({ name }: textHeader) {
    return (
        <Text
            textShadow={"1px 1px 2px purple, 0 0 0.5em red, 0 0 0.5em blue"}
            textColor={"white"}
            fontSize={"22px"}
        >
            {name}
        </Text>
    );
}

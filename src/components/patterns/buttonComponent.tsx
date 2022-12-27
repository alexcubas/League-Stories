import { Button, Text } from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";

type buttonType = {
    text?: string;
    func: any;
};

export default function ButtonComponent({ text, func }: buttonType) {
    return (
        <Button
            onClick={func}
            bgColor={"purple"}
            borderLeftRadius={0}
            _hover={{ opacity: "80%" }}
        >
            {text ? (
                <Text textStyle={"JBold"}>{text}</Text>
            ) : (
                <BiSearchAlt2 size={"30px"} color={"white"} />
            )}
        </Button>
    );
}

import { Text } from "@chakra-ui/react";

type textShadow = {
    text: string;
    mt?: string;
    fontSize?: string;
    textShadow?: string;
    textAlign?: any;
};

export default function TextWithShadow({
    text,
    mt,
    fontSize,
    textShadow,
    textAlign,
}: textShadow) {
    return (
        <Text
            mt={mt}
            fontSize={fontSize ? fontSize : "35px"}
            textStyle={"JBold"}
            textAlign={textAlign ? textAlign : "center"}
            textColor={"white"}
            textShadow={
                textShadow
                    ? textShadow
                    : "5px 5px 10px purple, 0 0 0.7em red, 0 0 0.2em blue"
            }
        >
            {text}
        </Text>
    );
}

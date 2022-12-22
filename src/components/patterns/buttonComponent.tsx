import { Button, Text } from "@chakra-ui/react";

type buttonType = {
    text: string;
    func: any;
};

export default function ButtonComponent({ text, func }: buttonType) {
    return (
        <Button onClick={func}>
            <Text>{text}</Text>
        </Button>
    );
}

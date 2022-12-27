import { Input } from "@chakra-ui/react";

type inputComponent = {
    text: string;
    setText: any;
};

export default function InputComponent({ text, setText }: inputComponent) {
    return (
        <Input
            borderRightRadius={0}
            borderColor={"purple"}
            value={text}
            _hover={{ opacity: "80%" }}
            focusBorderColor={"purple"}
            onChange={(e) => setText(e.target.value)}
        />
    );
}

import { Input } from "@chakra-ui/react";

type inputComponent = {
    text: string;
    setText: any;
    func?: any;
};

export default function InputComponent({
    text,
    setText,
    func,
}: inputComponent) {
    return (
        <Input
            onKeyUp={(e) => {
                if (e.key === "Enter") {
                    func;
                }
            }}
            borderRightRadius={0}
            borderColor={"purple"}
            value={text}
            _hover={{ opacity: "80%" }}
            focusBorderColor={"purple"}
            onChange={(e) => setText(e.target.value)}
        />
    );
}

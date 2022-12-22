import {
    Flex,
    FlexProps,
    Grid,
    GridProps,
    useBreakpointValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutProps extends FlexProps {
    children: ReactNode | ReactNode[];
}

export function Layout({ children, ...rest }: LayoutProps) {
    const Wide = useBreakpointValue({
        base: false,
        xs: false,
        sm: false,
        md: false,
        lg: true,
        xl: true,
    });

    return (
        <Flex
            w="full"
            justify="center"
            py={Wide ? 0 : "3.8rem"}
            as="main"
            position="relative"
            {...rest}
        >
            <Flex
                position={"absolute"}
                w={"100%"}
                h={"100%"}
                sx={{
                    background: `url(oldJinxBg.jpg)`,
                    "-webkit-animation":
                        "animatedBackground 12s linear infinite",
                    "-moz-animation": "animatedBackground 12s linear infinite",
                    "-o-animation": "animatedBackground 12s linear infinite",
                    animation: "animatedBackground 12s linear infinite",
                }}
            />
            <Flex
                direction={"column"}
                width={"100vw"}
                height={"100vh"}
                justify={"center"}
                alignItems={"center"}
                position={"relative"}
                className={"gradientWrapper"}
            >
                {children}
            </Flex>
        </Flex>
    );
}

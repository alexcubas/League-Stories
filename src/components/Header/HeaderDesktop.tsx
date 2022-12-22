import { Flex, Image, Text } from "@chakra-ui/react";
import TextHeader from "../patterns/TextHeader";
import Aos from "aos";
import "aos/dist/aos.css";

function HeaderDesktop() {
    setTimeout(function () {
        Aos.init();
    }, 200);

    return (
        <Flex
            w={"100%"}
            h={"100px"}
            position={"fixed"}
            top={"0%"}
            alignItems={"center"}
            justify={"space-between"}
            borderBottom={"2px solid rgb(255,255,255, 0.3)"}
            textStyle={"JBold"}
            data-aos="fade-down"
            data-aos-mirror="false"
            data-aos-duration="1500"
        >
            <Flex
                w={"full"}
                h={"full"}
                bg={"white"}
                position={"absolute"}
                zIndex={-1}
                opacity={"20%"}
            />
            <Flex
                ml={"30px"}
                alignItems={"center"}
                gap={"20px"}
                data-aos="zoom-in"
                data-aos-duration="3000"
            >
                <Image src={"marksManLogo.png"} w={"60px"} h={"40px"} />
                <TextHeader name="League Stats" />
            </Flex>
            <Flex gap={"35px"} data-aos="zoom-in" data-aos-duration="4000">
                <TextHeader name="Perfil" />
                <TextHeader name="Análise de Campeões" />
                <TextHeader name="Estátisticas" />
                <TextHeader name="Classificações" />
            </Flex>
            <Flex>{/* <Input></Input> */}</Flex>
        </Flex>
    );
}

export { HeaderDesktop };

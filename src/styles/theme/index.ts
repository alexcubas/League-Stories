import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    xs: "35rem", // 576px
    sm: "48rem", // 768px
    md: "62rem", // 992px
    lg: "75rem", // 1200px
    xl: "87.5rem", // 1400px
};

export const theme = extendTheme({
    breakpoints,

    variants: {
        color: "white",
    },

    colors: {
        pink: "#E4CAFF",
        blue: {
            "50": "#65DDFF",
            "100": "#68ffd3",
        },
        purple: "#682785",
        white: "#ffffff",
    },

    fonts: {
        heading: "Noto Sans, Arial, sans-serif",
        body: "Noto Sans, Arial, sans-serif",
    },

    fontSizes: {
        h1: "1.75rem", // 28px
        h2: "1.5rem", // 24px
        h3: "1.25rem", // 20px
        h4: "1,125rem", // 18px
        text1: "1rem", // 16px
        text2: "0.875rem", // 14px
        text3: "0.75rem", // 12px
        text4: "0.625rem", // 10px
    },

    textStyles: {
        Regular: {
            fontFamily: "Josefin Sans, Noto Sans, Arial, sans-serif",
            fontWeight: "400",
        },
        Bold: {
            fontFamily: "Noto Sans, Arial, sans-serif",
            fontWeight: "700",
        },
        JBold: {
            fontFamily: "Josefin Sans, Noto Sans, Arial, sans-serif",
            fontWeight: "700",
        },
        JLight: {
            fontFamily: "Josefin Sans, Noto Sans, Arial, sans-serif",
            fontWeight: "500",
        },
        JRegular: {
            fontFamily: "Josefin Sans, Noto Sans, Arial, sans-serif",
            fontWeight: "200",
        },
    },

    styles: {
        global: {
            body: {
                bg: "white.900",
                color: "black",
            },
        },
    },
});

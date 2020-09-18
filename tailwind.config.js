module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        fontFamily: {
            display: ["Inter", "Helvetica", "Arial", "sans-serif"],
            body: ["Inter", "Helvetica", "Arial", "sans-serif"],
        },
        extend: {
            colors: {
                gray: {
                    50: "#F3F3F4",
                    100: "#E8E8E8",
                    200: "#C5C5C7",
                    300: "#A3A2A5",
                    400: "#5D5D61",
                    500: "#18171D",
                    600: "#16151A",
                    700: "#0E0E11",
                    800: "#0B0A0D",
                    900: "#070709",
                },
                purple: {
                    50: "#F8F4FE",
                    100: "#F2EAFD",
                    200: "#DDCAF9",
                    300: "#C9ABF6",
                    400: "#A16BEF",
                    500: "#782CE8",
                    600: "#6C28D1",
                    700: "#481A8B",
                    800: "#361468",
                    900: "#240D46",
                },
            },
        },
    },
    variants: {},
    plugins: [],
};

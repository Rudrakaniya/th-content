import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#FFF9F6",
      100: "#FFF3ED",
      200: "#FFDECC",
      300: "#FFC3A3",
      400: "#FFA97A",
      500: "#FF7429",
      600: "#FF5900",
    },
    black: {
      50: "rgb(0,0,0,0.04)",
      100: "rgb(0,0,0,0.06)",
      200: "rgb(0,0,0,0.08)",
      300: "rgb(0,0,0,0.16)",
      400: "rgb(0,0,0,0.24)",
      500: "rgb(0,0,0,0.36)",
      600: "rgb(0,0,0,0.48)",
      700: "rgb(0,0,0,0.64)",
      800: "rgb(0,0,0,0.80)",
      900: "rgb(0,0,0,0.92)",
    },
  },
  fonts: {
    body: "'Inter', sans-serif",
  },
});

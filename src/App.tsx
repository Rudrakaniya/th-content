import React from "react";
import { ApolloAppProvider } from "./providers/ApolloProvider";
// import {
//   ChakraBaseProvider,
//   extendBaseTheme,
//   theme as chakraTheme,
//   CSSReset,
// } from "@chakra-ui/react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import { Dashboard } from "./pages/dashboard";

// const {
//   CardBody,
//   Stack,
//   Heading,
//   Divider,
//   CardFooter,
//   ButtonGroup,
//   Button,
//   Image,
//   Text,
//   Card,
// } = chakraTheme.components;

// const theme = extendBaseTheme({
//   components: {
//     Button,
//     CardBody,
//     Stack,
//     Heading,
//     Divider,
//     CardFooter,
//     ButtonGroup,
//     Image,
//     Text,
//     Card,
//   },
// });

function App() {
  return (
    <ApolloAppProvider>
      {/* <ChakraBaseProvider theme={theme}> */}
      <ChakraProvider>
        <CSSReset />
        <Dashboard />
      </ChakraProvider>
      {/* </ChakraBaseProvider> */}
    </ApolloAppProvider>
  );
}

export default App;

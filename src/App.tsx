import React from "react";
import { ApolloAppProvider } from "./providers/ApolloProvider";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import { Dashboard } from "./pages/dashboard";
import { theme } from "./theme/theme";

function App() {
  return (
    <ApolloAppProvider>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Dashboard />
      </ChakraProvider>
    </ApolloAppProvider>
  );
}

export default App;

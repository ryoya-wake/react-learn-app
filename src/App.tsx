import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import PokemonGuidePage from "./components/PokemonGuidePage";

function App() {
  return (
    <ChakraProvider>
      <PokemonGuidePage />
    </ChakraProvider>
  );
}

export default App;

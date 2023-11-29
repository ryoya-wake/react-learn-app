import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import PokemonGuidePage from "./components/PokemonGuidePage";
import PokemonGuidePageComp from "./components_complete/PokemonGuidePageComp";

function App() {
  return (
    <ChakraProvider>
      {/* ハンズオン用 */}
      <PokemonGuidePage />
      {/* 完成版 */}
      {/* <PokemonGuidePageComp /> */}
    </ChakraProvider>
  );
}

export default App;

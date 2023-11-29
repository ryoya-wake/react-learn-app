import { Box, HStack, Stack } from "@chakra-ui/react";
import SearchBox from "./SearchBox";
import Title from "./Title";
import PokemonImage from "./PokemonImage";
import PokemonData from "./PokemonData";
import { useState } from "react";

//ポケモン図鑑ページ
function PokemonGuidePage() {
  const handleClick = (pokemonName: string) => {};

  return (
    <>
      <Stack>
        <Title titleText="ポケモン図鑑" />
        <Box maxW="476px" mt="60px" ml="65px">
          <SearchBox handleClick={handleClick} />
        </Box>
        <Stack direction={"row"} mt="85px" ml="107px" spacing={"74px"}>
          <PokemonImage />
          <PokemonData />
        </Stack>
      </Stack>
    </>
  );
}

export default PokemonGuidePage;

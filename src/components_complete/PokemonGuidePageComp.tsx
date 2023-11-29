import { Box, HStack, Stack } from "@chakra-ui/react";
import SearchBoxComp from "./SearchBoxComp";
import Title from "./TitleComp";
import PokemonImageComp from "./PokemonImageComp";
import PokemonData from "./PokemonDataComp";
import { useState } from "react";

//ポケモン図鑑ページ
function PokemonGuidePageComp() {
  const [pokemonName, setPokemonName] = useState("");

  const handleClick = (value: string) => {
    setPokemonName(value);
  };

  return (
    <>
      <Stack>
        <Title titleText="ポケモン図鑑" />
        <Box maxW="476px" mt="60px" ml="65px">
          <SearchBoxComp handleClick={handleClick} />
        </Box>
        <Stack direction={"row"} mt="85px" ml="107px" spacing={"74px"}>
          <PokemonImageComp pokemonName={pokemonName} />
          <PokemonData pokemonName={pokemonName} />
        </Stack>
      </Stack>
    </>
  );
}

export default PokemonGuidePageComp;

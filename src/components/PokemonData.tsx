import { Box, VStack, Text, Stack } from "@chakra-ui/react";
import usePokemon from "../hooks/usePokemon";
type PokemonDataProps = {
  pokemonName: string;
};
function PokemonData() {
  const pokemonName = "ピカチュウ";

  const { pokemonData } = usePokemon(pokemonName);
  return (
    <Box>
      <Stack>
        <Text>
          ポケモン名：
          {pokemonName}
        </Text>
        <Text>
          タイプ：
          {pokemonData?.pokemonType}
        </Text>
        <Text>
          説明：
          {pokemonData?.pokemonDescription}
        </Text>
      </Stack>
    </Box>
  );
}

export default PokemonData;

import { Box, VStack, Text, Stack } from "@chakra-ui/react";
import usePokemon from "../hooks/usePokemon";
type PokemonDataCompProps = {
  pokemonName: string;
};
function PokemonDataComp({ pokemonName }: PokemonDataCompProps) {
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

export default PokemonDataComp;

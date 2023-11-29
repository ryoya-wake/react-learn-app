import { Box, Image, Text } from "@chakra-ui/react";
import usePokemon from "../hooks/usePokemon";
type PokemonImageProps = {
  pokemonName: string;
};

//ポケモン画像を表示させるコンポーネント
function PokemonImage() {
  const pokemonName = "ピカチュウ";
  const { pokemonData } = usePokemon(pokemonName);
  return (
    <Box>
      {pokemonData === undefined ? (
        <Text>エラー</Text>
      ) : (
        <Image src={pokemonData?.pokemonImageUrl} alt="Dan Abramov" />
      )}
    </Box>
  );
}

export default PokemonImage;

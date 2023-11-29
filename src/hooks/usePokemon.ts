import { useState, useEffect } from "react";
import axios from "axios";

type PokemonDataType = {
  pokemonName: string;
  pokemonType: string;
  pokemonDescription: string;
  pokemonImageUrl: string;
};

//ポケモン名からポケモン情報を取得するフック
const usePokemon = (pokemonName: string) => {
  const [pokemonData, setPokemonData] = useState<PokemonDataType>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pokemonName) return;

    const fetchPokemonData = async () => {
      setLoading(true);

      try {
        for (let index = 1; ; index++) {
          const responseSpecies = await axios.get(
            `https://pokeapi.co/api/v2/pokemon-species/${index}`
          );

          if (responseSpecies == null) {
            return;
          }
          const pokemonNameJa = responseSpecies.data.names.find(
            (elem: { language: { name: string; url: string }; name: string }) =>
              elem.language.name === "ja-Hrkt"
          ).name;
          const pokemonTypeJa = responseSpecies.data.genera.find(
            (elem: {
              language: { name: string; url: string };
              genus: string;
            }) => elem.language.name === "ja-Hrkt"
          ).genus;
          const pokemonDesctiptionJa =
            responseSpecies.data.flavor_text_entries.find(
              (elem: {
                language: { name: string; url: string };
                flavor_text: string;
              }) => elem.language.name === "ja-Hrkt"
            ).flavor_text;

          console.log(responseSpecies.data);

          if (pokemonNameJa === pokemonName) {
            const responseImageUrl = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${index}`
            );
            setPokemonData({
              pokemonName: pokemonNameJa,
              pokemonType: pokemonTypeJa,
              pokemonDescription: pokemonDesctiptionJa,
              pokemonImageUrl:
                responseImageUrl.data.sprites.other["official-artwork"]
                  .front_default,
            });
            return;
          }
        }
      } catch (err) {
        return;
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [pokemonName]);

  return { pokemonData, loading };
};

export default usePokemon;

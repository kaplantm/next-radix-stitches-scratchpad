import PokemonSearchContext, { usePokemonSearchContextState } from "../../../lib/contexts/pokemon-search";
import Flex from "../../atoms/Flex";
import PokemonSearchResults from "../../organisms/pokemon-search/Results";
import PokemonSearchBar from "../../organisms/pokemon-search/SearchBar";

const PokemonSearch = () => {
  const pokemonSearchContextState = usePokemonSearchContextState();

  return (
    <Flex variant="full" direction="column">
      <PokemonSearchContext.Provider value={pokemonSearchContextState}>
        <h1>Pokemon Search</h1>
        <PokemonSearchBar />
        <PokemonSearchResults />
      </PokemonSearchContext.Provider>
    </Flex>
  );
};

export default PokemonSearch;

import PokemonSearchContext, { usePokemonSearchContextState } from "../../../lib/contexts/pokemon-search";
import StyledDiv from "../../atoms/StyledDiv";
import PokemonSearchResults from "../../organisms/pokemon-search/Results";
import PokemonSearchBar from "../../organisms/pokemon-search/SearchBar";

const PokemonSearch = () => {
  const pokemonSearchContextState = usePokemonSearchContextState();

  return (
    <StyledDiv variant="full" direction="column">
      <PokemonSearchContext.Provider value={pokemonSearchContextState}>
        <h1>Pokemon Search</h1>
        <PokemonSearchBar />
        <PokemonSearchResults />
      </PokemonSearchContext.Provider>
    </StyledDiv>
  );
};

export default PokemonSearch;

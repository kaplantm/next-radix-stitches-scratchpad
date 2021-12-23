import { usePokemonSearchContext, usePokemonSearchContextState } from "../../../../lib/contexts/pokemon-search";
import Panel from "../../../atoms/Panel";
import LabelledTextField from "../../../molecules/LabelledTextField";

const PokemonSearchBar = () => {
  const { handleSearchTermChange, searchTerm } = usePokemonSearchContext();

  return (
    <Panel direction="column">
      <h1>Search Bar</h1>
      <LabelledTextField id="pokemon-search" onChange={handleSearchTermChange} value={searchTerm}>
        Search Term
      </LabelledTextField>
    </Panel>
  );
};

export default PokemonSearchBar;

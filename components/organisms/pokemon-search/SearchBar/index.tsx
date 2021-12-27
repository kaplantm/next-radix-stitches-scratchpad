import { usePokemonSearchContext } from "../../../../lib/contexts/pokemon-search";
import { Item } from "@react-stately/collections";
import DropDown from "../../../atoms/Dropdown";
import Panel from "../../../atoms/Panel";
import TextField from "../../../atoms/TextField";
import { pokemonTypesEnum, pokemonTypesList } from "../../../../lib/types/pokemon-search";
import StyledDiv from "../../../atoms/StyledDiv";

const PokemonSearchBar = () => {
  const { handleSearchTermChange, searchTerm, handleTypeChange, type } = usePokemonSearchContext();

  console.log("***", { searchTerm, type, keys: pokemonTypesList });
  return (
    <Panel>
      <h1>Search Bar</h1>
      <StyledDiv flex>
        <TextField label="Search" placeholder="Bulbasaur" onChange={handleSearchTermChange} value={searchTerm} />
        <DropDown label="Type" onSelectionChange={handleTypeChange}>
          {pokemonTypesList.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </DropDown>
      </StyledDiv>
    </Panel>
  );
};

export default PokemonSearchBar;

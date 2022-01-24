import { memo } from "react";
import StyledDiv from "../../../../atoms/StyledDiv";
import PokemonSearchResultsGridCard from "./Card";

type PokemonSearchResultsGridProps = {
  results: string[];
};

const PokemonSearchResultsGrid: React.FunctionComponent<PokemonSearchResultsGridProps> = ({ results }) => {
  console.log("PokemonSearchResultsGrid");
  return (
    <StyledDiv>
      {results.map((name) => (
        <PokemonSearchResultsGridCard key={name} name={name} />
      ))}
    </StyledDiv>
  );
};

// need memo here or else we lose the rendering benefits of debouncing the search term before rendering the grid
export default memo(PokemonSearchResultsGrid);

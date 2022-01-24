import StyledDiv from "../../../../../atoms/StyledDiv";

type PokemonSearchResultsGridCardProps = {
  name: string;
};

const PokemonSearchResultsGridCard: React.FunctionComponent<PokemonSearchResultsGridCardProps> = ({ name }) => {
  return <StyledDiv>{name}</StyledDiv>;
};

export default PokemonSearchResultsGridCard;

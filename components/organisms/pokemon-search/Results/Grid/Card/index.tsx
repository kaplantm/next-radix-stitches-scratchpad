import Panel from "../../../../../atoms/Panel";

type PokemonSearchResultsGridCardProps = {
  name: string;
};

const PokemonSearchResultsGridCard: React.FunctionComponent<PokemonSearchResultsGridCardProps> = ({ name }) => {
  return <Panel>{name}</Panel>;
};

export default PokemonSearchResultsGridCard;

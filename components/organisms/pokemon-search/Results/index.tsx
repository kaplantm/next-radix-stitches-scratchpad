import { useEffect, useState } from "react";
import { usePokemonSearchContext } from "../../../../lib/contexts/pokemon-search";
import useDebounce from "../../../../lib/hooks/useDebouce";
import { sleep } from "../../../../lib/utils";
import Panel from "../../../atoms/Panel";
import PokemonSearchResultsGrid from "./Grid";

async function mockGetAPIResults() {
  await sleep();
  const mockResults = ["charmander", "bulbasaur", "squirtle"]; // i know there aren't in order don't sue me
  return mockResults;
}

const PokemonSearchResults = () => {
  const { searchTerm, type } = usePokemonSearchContext();
  const debouncedSearchTerm = useDebounce(searchTerm, 200);
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function doAsync() {
      setLoading(true);
      const results = await mockGetAPIResults(); // TODO: swr
      setResults(results);
      setLoading(false);
    }
    doAsync();
  }, [debouncedSearchTerm]);

  return (
    <Panel direction="column">
      <p>
        Results for: {searchTerm}
        {!!type && ` (${type} type)`}
      </p>
      {/* TODO: spinner */}
      {loading && <p>Loading...</p>}
      <PokemonSearchResultsGrid results={results} />
    </Panel>
  );
};

export default PokemonSearchResults;

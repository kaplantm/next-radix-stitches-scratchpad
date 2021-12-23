import { createContext, useState, useContext, useCallback, ChangeEvent } from "react";
import { pokemonTypesEnum } from "../../types/pokemon-search";

type PokemonSearchContextState = {
  searchTerm: string;
  type: pokemonTypesEnum | undefined;
  genOneOnly: boolean;
  currentPage: number;
  totalPages: number;
  handleSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setGenOneOnly: (value: boolean) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  clearAllFilters: () => void;
  setTotalPages: (pages: number) => void;
};

const PokemonSearchContextDefaultState = {
  searchTerm: "",
  type: undefined,
  genOneOnly: false,
  currentPage: 0,
  totalPages: 0,
  handleSearchTermChange: () => {},
  setGenOneOnly: () => {},
  goToNextPage: () => {},
  goToPreviousPage: () => {},
  clearAllFilters: () => {},
  setTotalPages: () => {},
};

const PokemonSearchContext = createContext<PokemonSearchContextState>(PokemonSearchContextDefaultState);

export function usePokemonSearchContextState(): PokemonSearchContextState {
  const [currentPage, setCurrentPage] = useState(PokemonSearchContextDefaultState.currentPage);
  const [totalPages, setTotalPages] = useState(PokemonSearchContextDefaultState.currentPage);
  const [type, setType] = useState(PokemonSearchContextDefaultState.type);
  const [searchTerm, setSearchTerm] = useState(PokemonSearchContextDefaultState.searchTerm);
  const [genOneOnly, setGenOneOnly] = useState(PokemonSearchContextDefaultState.genOneOnly);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  }, [totalPages]);
  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);
  const clearAllFilters = useCallback(() => {
    setType(undefined);
    setGenOneOnly(false);
  }, []);

  const handleSearchTermChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value || "");
  }, []);

  return {
    searchTerm,
    type,
    genOneOnly,
    currentPage,
    totalPages,
    handleSearchTermChange,
    setGenOneOnly,
    goToNextPage,
    goToPreviousPage,
    clearAllFilters,
    setTotalPages,
  };
}

export function usePokemonSearchContext() {
  return useContext(PokemonSearchContext);
}

export default PokemonSearchContext;

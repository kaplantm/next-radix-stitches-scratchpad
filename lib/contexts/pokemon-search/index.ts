import { useSelect } from "@react-aria/select";
import { useTextField } from "@react-aria/textfield";
import { createContext, useState, useContext, useCallback, ChangeEvent } from "react";
import { pokemonTypesEnum } from "../../types/pokemon-search";

type PokemonSearchContextState = {
  searchTerm: string;
  type: pokemonTypesEnum | undefined;
  genOneOnly: boolean;
  currentPage: number;
  totalPages: number;
  handleSearchTermChange: Parameters<typeof useTextField>[0]["onChange"];
  // not using handleTypeChange: Parameters<typeof useSelect>[0]["onSelectionChange"];
  // since it just wants string | number and we want to be more specific
  handleTypeChange: ((type: pokemonTypesEnum) => any) | undefined;
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
  handleTypeChange: () => {},
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
  const [type, setType] = useState<pokemonTypesEnum | undefined>(PokemonSearchContextDefaultState.type);
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

  const handleSearchTermChange = useCallback((newSearchTerm: string) => {
    setSearchTerm(newSearchTerm || "");
  }, []);
  const handleTypeChange = useCallback((newType: pokemonTypesEnum) => {
    setType(newType);
  }, []);

  return {
    searchTerm,
    type,
    genOneOnly,
    currentPage,
    totalPages,
    handleSearchTermChange,
    handleTypeChange,
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

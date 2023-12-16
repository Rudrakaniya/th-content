import React, { useCallback } from "react";
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import { debounce } from "lodash";

interface SearchProps {
  onSearch: (query: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  // Use useCallback to memoize the debounced function
  const debouncedSearch = useCallback(
    debounce((query: string) => onSearch(query), 300),
    []
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    debouncedSearch(query);
  };

  return (
    <InputGroup maxW="md">
      <InputLeftElement pointerEvents="none">
        <GoSearch color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search..."
        variant="outline"
        borderColor="gray.300"
        onChange={handleSearch}
      />
      <Button> clear</Button>
    </InputGroup>
  );
};

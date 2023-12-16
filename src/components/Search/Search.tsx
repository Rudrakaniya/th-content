import React, { useCallback, useState } from "react";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useTheme,
} from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import { debounce } from "lodash";

interface SearchProps {
  onSearch: (query: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const { colors } = useTheme();
  const [hideClearButton, setHideClearButton] = useState(true);
  const [searchText, setSearchText] = useState("");

  const debouncedSearch = useCallback(
    debounce((query: string) => onSearch(query), 300),
    []
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchText(event.target.value);
    setHideClearButton(false);
    if (event.target.value === "") {
      setHideClearButton(true);
    }
    debouncedSearch(query);
  };

  const resetSearchValue = () => {
    setHideClearButton(true);
    setSearchText("");
    debouncedSearch("");
  };

  return (
    <InputGroup maxW="md" position="relative">
      <InputLeftElement pointerEvents="none">
        <GoSearch color="white" />
      </InputLeftElement>
      <Input
        type="text"
        value={searchText}
        placeholder="Search..."
        variant="outline"
        color="white"
        borderColor="white"
        focusBorderColor={colors.primary[400]}
        onChange={handleSearch}
      />
      <IconButton
        position="absolute"
        ml="2"
        bottom="2"
        zIndex="20"
        right="2"
        hidden={hideClearButton}
        isRound={true}
        size="xs"
        variant="solid"
        onClick={resetSearchValue}
        backgroundColor="white"
        aria-label="Clear"
        icon={<RxCrossCircled />}
      />
    </InputGroup>
  );
};

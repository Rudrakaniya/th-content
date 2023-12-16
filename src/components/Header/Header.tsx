import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Search } from "../Search";

interface HeaderProps {
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <Box as="header" bg="transparent" p={4}>
      <Flex align="center" justify="flex-end">
        <Search onSearch={onSearch} />
      </Flex>
    </Box>
  );
};

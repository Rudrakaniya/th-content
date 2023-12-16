import { useState, useEffect } from "react";
import { Card, CardSkeleton } from "../components";
import { Header } from "../components/Header";
import {
  SimpleGrid,
  Text,
  Box,
  useTheme,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { CONTENT_QUERY } from "../graphql/queries/contentQuery";
import { resizeImageUrl } from "../util/imageResizeUtils";

export const Dashboard = () => {
  const { colors } = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [searchResults, setSearchResults] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, error, data } = useQuery(CONTENT_QUERY, {
    variables: { query: searchQuery },
  });

  useEffect(() => {
    setSearchResults(data?.contentCards?.edges || []);
  }, [data]);

  const handleSearch = (query: string) => {
    console.log("query: ", query);
    setSearchQuery(query);
    setSearchResults([]);
  };
  return (
    <Box backgroundColor={colors.black[900]} minHeight="100vh">
      <Header onSearch={handleSearch} />
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={4}
        p={4}
      >
        {loading ? (
          <>
            {Array.from({ length: 8 }, (_, index) => (
              <CardSkeleton key={index} />
            ))}
          </>
        ) : searchResults.length > 0 ? (
          searchResults.map((result: any, index: number) => (
            <Card
              cardAction={onOpen}
              key={index}
              title={result.name}
              expertName="Jane Doe"
              category={result.categories[0].name}
              imageSrc={resizeImageUrl(result.image.uri)}
              imageAlt={result.name}
              percentageOfContentCompleted={60}
              contentLength="30m"
              subtitle={result.categories[0].name}
            />
          ))
        ) : (
          <Text color="white">No Results found</Text>
        )}
      </SimpleGrid>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hey, How are you doing today?</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>
              You miss 100 percent of the chances you don’t take. – Wayne
              Gretzky’ – Michael Scott
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

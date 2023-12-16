import { useState, useEffect } from "react";
import { Card, CardSkeleton } from "../components";
import { Header } from "../components/Header";
import { SimpleGrid } from "@chakra-ui/react";
import { useQuery, gql } from "@apollo/client";
import { CONTENT_QUERY } from "../graphql/queries/contentQuery";

export const Dashboard = () => {
  const [searchResults, setSearchResults] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, error, data } = useQuery(CONTENT_QUERY, {
    variables: { query: searchQuery },
  });
  console.log("data: ", data?.contentCards?.edges);

  useEffect(() => {
    setSearchResults(data?.contentCards?.edges || []);
  }, [data]);

  const handleSearch = (query: string) => {
    console.log("query: ", query);
    setSearchQuery(query);
    setSearchResults([]);
  };
  return (
    <div>
      <Header onSearch={handleSearch} />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4} p={4}>
        {loading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : searchResults.length > 0 ? (
          searchResults.map((result: any, index: number) => (
            <Card
              key={index}
              title={result.name}
              expertName="Jane Doe"
              category={result.categories[0].name}
              imageSrc={result.image.uri}
              imageAlt={result.name}
              percentageOfContentCompleted={60}
              contentLength="30m"
              subtitle={result.categories[0].name}
            />
          ))
        ) : (
          <Card
            title={searchResults[0]?.name}
            expertName="Jane Doe"
            category={searchResults[0]?.categories[0].name}
            imageSrc={searchResults[0]?.image.uri}
            imageAlt={searchResults[0]?.name}
            percentageOfContentCompleted={60}
            contentLength="30m"
            subtitle={searchResults[0]?.categories[0].name}
          />
        )}
      </SimpleGrid>
    </div>
  );
};

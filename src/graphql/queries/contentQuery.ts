import { gql } from "@apollo/client";

export const CONTENT_QUERY = gql`
  query ListSpaceCats($query: String!) {
    contentCards(filter: { limit: 20, keywords: $query, types: [PODCAST] }) {
      edges {
        ... on Podcast {
          name
          image {
            ...Image
          }
          categories {
            ...Category
          }
          experts {
            ...Expert
          }
        }
      }
    }
  }
  fragment Image on Image {
    uri
  }
  fragment Category on Category {
    name
  }
  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }
`;

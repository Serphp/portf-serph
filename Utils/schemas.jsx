import { gql } from "graphql-request";

export const queryPage = gql`
    query Projects($first: Int, $after: String) {
    projectsConnection(after: $after, first: $first, orderBy: createdAt_DESC) {
        pageInfo {
        hasNextPage
        endCursor
        }
        edges {
        node {
            createdAt
            id
            slug
            name
            updatedAt
            lang
            categoria
            duration
            description
            url
            url2
            image {
            url
            }
        }
        }
    }
    }
    `;

export const query = gql`
    query Projects($first: Int, $after: String) {
      projects(first: $first, after: $after) {
        createdAt
        id
        slug
        name
        updatedAt
        lang
        categoria
        duration
        description
        url
        url2
        image {
          url
        }
      }
    }
    `;
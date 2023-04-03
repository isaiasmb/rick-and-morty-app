import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import {
  QueryCharacters,
  QueryCharactersVariables
} from 'graphql/generated/QueryCharacters'

export const QUERY_CHARACTERS = gql`
  query QueryCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        prev
        next
      }
      results {
        id
        name
        status
        species
        image
        type
        episode {
          id
          name
        }
        origin {
          name
          dimension
          residents {
            id
          }
        }
        location {
          name
          dimension
          residents {
            id
          }
        }
      }
    }
  }
`

export const useQueryCharacters = (
  options: QueryHookOptions<QueryCharacters, QueryCharactersVariables>
) => {
  return useQuery<QueryCharacters, QueryCharactersVariables>(
    QUERY_CHARACTERS,
    options
  )
}

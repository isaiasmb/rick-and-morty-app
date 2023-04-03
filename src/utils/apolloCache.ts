import { InMemoryCache } from '@apollo/client'
import { uniqBy } from 'lodash'

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: ['view', 'first'],
          merge: (
            existing = { __typename: 'Characters', results: [] },
            incoming
          ) => {
            const result = {
              ...incoming,
              results: uniqBy(
                [...existing.results, ...incoming.results],
                '__ref'
              )
            }
            return result
          }
        }
      }
    }
  }
})

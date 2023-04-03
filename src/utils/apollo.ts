import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'
import apolloCache from './apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    // TODO: This is a bad practice, the correct thing would be to use a .env file.
    // I did it this way to make it easier to start the test project ;)
    link: new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' }),
    cache: apolloCache
  })
}

export function initializeApollo(
  initialState: NormalizedCacheObject | null = null
) {
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  if (typeof window === 'undefined') return apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}

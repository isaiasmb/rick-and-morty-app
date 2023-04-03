import { GetStaticProps } from 'next'

import HomeTemplate from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_CHARACTERS } from 'graphql/queries/characters'
import { QueryCharacters } from 'graphql/generated/QueryCharacters'

const apolloClient = initializeApollo()

export default function HomePage() {
  return <HomeTemplate />
}

export const getStaticProps: GetStaticProps = async () => {
  await apolloClient.query<QueryCharacters>({
    query: QUERY_CHARACTERS,
    variables: { page: 1 }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  }
}

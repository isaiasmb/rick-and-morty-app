import React from 'react'

import { Container } from 'components/Container'
import CharCard, { CharCardProps } from 'components/CharCard'
import { Grid } from 'components/Grid'

import { QueryCharacters_characters_info } from 'graphql/generated/QueryCharacters'
import { useQueryCharacters } from 'graphql/queries/characters'

import * as S from './styles'
import useScrollToBottom from 'hooks/useScrollToBottom'
import { charactersMapper } from 'utils/mappers'

export type HomeTemplateProps = {
  characters: CharCardProps[]
  info: QueryCharacters_characters_info
}

const HomeTemplate = () => {
  const { data, loading, fetchMore } = useQueryCharacters({
    notifyOnNetworkStatusChange: true,
    variables: {
      page: 1
    }
  })

  const handleFetchMore = async () => {
    if (!data || loading) {
      return
    }

    await fetchMore({
      variables: { page: data.characters?.info?.next }
    })
  }

  const ref = useScrollToBottom<HTMLDivElement>(handleFetchMore)

  if (!data?.characters?.results) {
    return <p>loading...</p>
  }

  const mappedCharacters = charactersMapper(data.characters.results)

  return (
    <Container ref={ref}>
      {data.characters?.results?.length ? (
        <>
          <Grid>
            {mappedCharacters.map((char) => (
              <CharCard key={char.id} {...char} />
            ))}
          </Grid>

          {loading && (
            <S.ShowMoreLoading
              src="/img/dots.svg"
              alt="Loading more games..."
            />
          )}
        </>
      ) : (
        <div>Empty</div>
      )}
    </Container>
  )
}

export default HomeTemplate

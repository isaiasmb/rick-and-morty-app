import Location, { LocationProps } from 'components/Location'
import Status, { StatusProps } from 'components/Status'

import * as S from './styles'

type Episode = {
  id: string
  name: string
}

export type CharCardProps = {
  id: string
  name: string
  species: string
  image: string
  episode: Episode[]
} & LocationProps &
  StatusProps

const CharCard = ({
  name,
  status,
  species,
  image,
  episode,
  origin,
  location
}: CharCardProps) => {
  return (
    <S.Wrapper>
      <S.OverImageBox>
        <Status status={status} />
      </S.OverImageBox>
      <S.ImageBox>
        <img src={image} alt={name} />
      </S.ImageBox>

      <S.Body>
        <S.Name>{name}</S.Name>
        <S.Species>{species}</S.Species>

        <Location origin={origin} location={location} />

        <S.Episodies>
          Appears in{' '}
          <S.AmountOfEpisodies role="button">
            {episode.length} episodes
          </S.AmountOfEpisodies>
        </S.Episodies>
      </S.Body>
    </S.Wrapper>
  )
}

export default CharCard

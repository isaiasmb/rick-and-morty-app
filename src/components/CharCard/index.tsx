import Dropdown from 'components/Dropdown'
import Location, { LocationProps } from 'components/Location'
import Status, { StatusProps } from 'components/Status'
import { useRef, useState } from 'react'

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const ref = useRef() as React.MutableRefObject<HTMLElement>

  return (
    <>
      <S.Wrapper>
        <S.OverImageBox>
          <Status status={status} />
        </S.OverImageBox>
        <S.ImageBox>
          <img src={image} alt={name} />
        </S.ImageBox>

        <S.Body>
          <S.Name>{name}</S.Name>
          <S.Species>
            {species} |{' '}
            <S.Episodies>
              Appears in{' '}
              <S.AmountOfEpisodies
                role="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                ref={ref}
              >
                {episode.length} episodes
              </S.AmountOfEpisodies>
            </S.Episodies>
          </S.Species>

          <Location origin={origin} location={location} />
        </S.Body>
      </S.Wrapper>

      <Dropdown
        open={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
        parentRef={ref}
      >
        <S.Episodes>
          {episode.map((item) => (
            <S.EpisodeName key={item.id}>{item.name}</S.EpisodeName>
          ))}
        </S.Episodes>
      </Dropdown>
    </>
  )
}

export default CharCard

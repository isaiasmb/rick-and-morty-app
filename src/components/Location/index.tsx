import * as S from './styles'

export type LocationType = {
  name: string
  dimension: string
  amountOfResidents: number
}

export type LocationProps = {
  origin: LocationType
  location: LocationType
}

const Location = ({ origin, location }: LocationProps) => {
  return (
    <S.Wrapper>
      <S.Origin>
        <S.LocationTitle>Origin</S.LocationTitle>
        <S.LocationInfo>
          <S.LocationInfoItem>
            <S.Title>Name</S.Title>
            <S.Value>{origin.name}</S.Value>
          </S.LocationInfoItem>
          <S.LocationInfoItem>
            <S.Title>Dimension</S.Title>
            <S.Value>{origin.dimension}</S.Value>
          </S.LocationInfoItem>
          <S.LocationInfoItem>
            <S.Title>Residents</S.Title>
            <S.Value>{origin.amountOfResidents}</S.Value>
          </S.LocationInfoItem>
        </S.LocationInfo>
      </S.Origin>
      <S.Location>
        <S.LocationTitle>Location</S.LocationTitle>
        <S.LocationInfo>
          <S.LocationInfoItem>
            <S.Title>Name</S.Title>
            <S.Value>{location.name}</S.Value>
          </S.LocationInfoItem>
          <S.LocationInfoItem>
            <S.Title>Dimension</S.Title>
            <S.Value>{location.dimension}</S.Value>
          </S.LocationInfoItem>
          <S.LocationInfoItem>
            <S.Title>Residents</S.Title>
            <S.Value>{location.amountOfResidents}</S.Value>
          </S.LocationInfoItem>
        </S.LocationInfo>
      </S.Location>
    </S.Wrapper>
  )
}

export default Location

import * as S from './styles'

export type LocationType = {
  name?: string
  dimension?: string
  amountOfResidents?: number
}

export type LocationProps = {
  origin: LocationType
  location: LocationType
}

const Location = ({ origin, location }: LocationProps) => {
  return (
    <S.Wrapper>
      <S.LocationBox>
        <S.LocationTitle>Origin</S.LocationTitle>
        <S.LocationInfo>
          {origin.name && (
            <S.LocationInfoItem>
              <S.Title>Name</S.Title>
              <S.Value>{origin.name}</S.Value>
            </S.LocationInfoItem>
          )}
          {origin.dimension && (
            <S.LocationInfoItem>
              <S.Title>Dimension</S.Title>
              <S.Value>{origin.dimension}</S.Value>
            </S.LocationInfoItem>
          )}
          {origin.amountOfResidents && (
            <S.LocationInfoItem>
              <S.Title>Residents</S.Title>
              <S.Value>{origin.amountOfResidents}</S.Value>
            </S.LocationInfoItem>
          )}
        </S.LocationInfo>
      </S.LocationBox>
      <S.LocationBox>
        <S.LocationTitle>Location</S.LocationTitle>
        <S.LocationInfo>
          {location.name && (
            <S.LocationInfoItem>
              <S.Title>Name</S.Title>
              <S.Value>{location.name}</S.Value>
            </S.LocationInfoItem>
          )}
          {location.dimension && (
            <S.LocationInfoItem>
              <S.Title>Dimension</S.Title>
              <S.Value>{location.dimension}</S.Value>
            </S.LocationInfoItem>
          )}
          {location.amountOfResidents && (
            <S.LocationInfoItem>
              <S.Title>Residents</S.Title>
              <S.Value>{location.amountOfResidents}</S.Value>
            </S.LocationInfoItem>
          )}
        </S.LocationInfo>
      </S.LocationBox>
    </S.Wrapper>
  )
}

export default Location

import { CharCardProps } from 'components/CharCard'
import { QueryCharacters_characters_results } from 'graphql/generated/QueryCharacters'

export const charactersMapper = (
  characters: (QueryCharacters_characters_results | null)[]
): CharCardProps[] => {
  return characters.map((char) => ({
    id: char?.id,
    name: char?.name,
    status: char?.status,
    species: char?.species,
    image: char?.image,
    episode: char?.episode,
    origin: {
      name: char?.origin?.name,
      dimension: char?.origin?.dimension,
      amountOfResidents: char?.origin?.residents.length || undefined
    },
    location: {
      name: char?.location?.name,
      dimension: char?.location?.dimension,
      amountOfResidents: char?.location?.residents.length || undefined
    }
  })) as CharCardProps[]
}

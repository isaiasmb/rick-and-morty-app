import { CharCardProps } from '.'

export default {
  id: '1',
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    {
      id: '1',
      name: 'Pilot'
    },
    {
      id: '2',
      name: 'Lawnmower Dog'
    },
    {
      id: '3',
      name: 'Anatomy Park'
    },
    {
      id: '4',
      name: 'M. Night Shaym-Aliens!'
    },
    {
      id: '5',
      name: 'Meeseeks and Destroy'
    }
  ],
  origin: {
    name: 'Earth (C-137)',
    dimension: 'Dimension C-137',
    amountOfResidents: 58
  },
  location: {
    name: 'Earth (C-137)',
    dimension: 'Dimension C-137',
    amountOfResidents: 58
  }
} as CharCardProps

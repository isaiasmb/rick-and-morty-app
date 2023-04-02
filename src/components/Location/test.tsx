import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mock from './mock'

import Location from '.'

describe('<Location />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Location {...mock} />)

    expect(screen.getByText('Origin')).toBeInTheDocument()
    expect(screen.getByText(mock.origin.name)).toBeInTheDocument()
    expect(screen.getByText(mock.origin.dimension)).toBeInTheDocument()
    expect(screen.getByText(mock.origin.amountOfResidents)).toBeInTheDocument()

    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText(mock.location.name)).toBeInTheDocument()
    expect(screen.getByText(mock.location.dimension)).toBeInTheDocument()
    expect(
      screen.getByText(mock.location.amountOfResidents)
    ).toBeInTheDocument()
  })
})

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Status from '.'

describe('<Status />', () => {
  it('should render the status value', () => {
    renderWithTheme(<Status status="Alive" />)
    expect(screen.getByText(/Alive/i)).toBeInTheDocument()
    expect(screen.getByText(/Alive/i).parentElement).toHaveStyle({
      backgroundColor: '#43C370'
    })
  })

  it('should render with the red color when is dead', () => {
    renderWithTheme(<Status status="Dead" />)
    expect(screen.getByText(/Dead/i).parentElement).toHaveStyle({
      backgroundColor: '#e0203b'
    })
  })

  it('should render with the gray color when is unknown', () => {
    renderWithTheme(<Status status="unknown" />)
    expect(screen.getByText(/unknown/i).parentElement).toHaveStyle({
      backgroundColor: '#718096'
    })
  })
})

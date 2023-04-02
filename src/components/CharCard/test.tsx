import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mock from './mock'

import CharCard from '.'

jest.mock('components/Status', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Status"></div>
    }
  }
})

jest.mock('components/Location', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Location"></div>
    }
  }
})

describe('<CharCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<CharCard {...mock} />)

    expect(screen.getByTestId('Mock Status')).toBeInTheDocument()

    expect(screen.getByRole('img', { name: mock.name })).toHaveAttribute(
      'src',
      mock.image
    )

    expect(screen.getByRole('heading', { name: mock.name })).toBeInTheDocument()

    expect(screen.getByText(mock.species)).toBeInTheDocument()

    expect(screen.getByTestId('Mock Location')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /5 episodes/i })
    ).toBeInTheDocument()
  })
})

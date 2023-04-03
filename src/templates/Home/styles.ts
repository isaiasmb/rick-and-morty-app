import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const ShowMoreButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    color: ${theme.colors.white};

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`

export const ShowMoreLoading = styled.img`
  ${({ theme }) => css`
    width: 8rem;
    margin: 0 auto ${theme.spacings.medium} auto;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.medium};
    display: flex;
  `}
`

export const Origin = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const LocationTitle = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
  `}
`

export const LocationInfo = styled.div``

export const LocationInfoItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xxsmall};
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-weight: 600;
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Value = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
  `}
`

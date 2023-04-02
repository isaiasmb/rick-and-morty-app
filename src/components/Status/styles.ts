import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation
} from 'styled-components'

import { StatusProps, StatusType } from '.'

type WrapperProps = Pick<StatusProps, 'status'>

type ModifiersType = {
  [key in StatusType]: (theme: DefaultTheme) => FlattenSimpleInterpolation
}

const wrapperModifiers: ModifiersType = {
  Alive: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green};
  `,
  Dead: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.red};
  `,
  unknown: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gray};
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, status }) => css`
    display: inline-block;
    padding: ${theme.spacings.xxxsmall};
    border-radius: ${theme.border.radius.large};
    line-height: ${theme.font.sizes.xsmall};

    ${wrapperModifiers[status](theme)};
  `}
`

export const Value = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
  `}
`

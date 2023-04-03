import styled, { css } from 'styled-components'
import { AlignType } from '.'

type WrapperProps = {
  align: AlignType
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ align }) => css`
    position: absolute;
    top: ${align.top}px;
    left: ${align.left}px;
  `}
`

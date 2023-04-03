import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: block;
    text-decoration: none;
    border-radius: ${theme.border.radius.huge};
    background-color: ${lighten(0.25, theme.colors.lightGray)};
    overflow: hidden;
    transition: 0.3s;

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
    }
  `}
`

export const OverImageBox = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: ${theme.spacings.xsmall};
    right: ${theme.spacings.xsmall};
    left: ${theme.spacings.xsmall};
  `}
`

export const ImageBox = styled.div`
  height: 24rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
  `}
`

export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.darkGray};
  `}
`

export const Species = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`

export const Episodies = styled.span`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.medium};
  `}
`

export const AmountOfEpisodies = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    cursor: pointer;
    text-decoration: underline;
  `}
`

export const Episodes = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.xxsmall};
    max-height: 40rem;
    overflow: scroll;
    border-radius: ${theme.border.radius.huge};
    background-color: ${lighten(0.15, theme.colors.lightGray)};
  `}
`

export const EpisodeName = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    padding-bottom: ${theme.spacings.xxsmall};
  `}
`

import * as S from './styles'

export type StatusType = 'Alive' | 'Dead' | 'unknown'

export type StatusProps = {
  status: StatusType
}

const Status = ({ status }: StatusProps) => (
  <S.Wrapper status={status}>
    <S.Value>{status}</S.Value>
  </S.Wrapper>
)

export default Status

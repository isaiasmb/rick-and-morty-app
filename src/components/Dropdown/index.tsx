import { useClickOutside } from 'hooks/useClickOutside'
import { usePortal } from 'hooks/usePortal'
import { useRef } from 'react'

import * as S from './styles'

export type AlignType = {
  left: number
  top: number
}

export type Dropdown = {
  open: boolean
  onClose: () => void
  parentRef: React.MutableRefObject<HTMLElement>
  children: React.ReactNode
}

const Dropdown = ({ open, onClose, parentRef, children }: Dropdown) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>
  const { Portal } = usePortal()

  useClickOutside([ref, parentRef], () => {
    onClose()
  })

  if (!open) {
    return null
  }

  const rect = parentRef.current.getBoundingClientRect()
  const align = { top: rect.bottom + window.scrollY, left: rect.left }

  return (
    <Portal>
      <S.Wrapper ref={ref} align={align}>
        {children}
      </S.Wrapper>
    </Portal>
  )
}

export default Dropdown

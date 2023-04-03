import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  id?: string
  container?: HTMLElement
}

export const usePortal = ({ id, container }: PortalProps = {}) => {
  const [currentContainer, setCurrentContainer] = useState(container)

  useEffect(() => {
    const existingParent = id && document.querySelector(`#${id}`)
    const parentElement = (container ||
      existingParent ||
      document.body) as HTMLElement

    setCurrentContainer(parentElement)
  }, [container, id])

  const Portal = useCallback(
    ({ children }: { children: React.ReactNode }) => {
      if (currentContainer != null)
        return createPortal(children, currentContainer)
      return null
    },
    [currentContainer]
  )

  return { target: currentContainer, Portal }
}

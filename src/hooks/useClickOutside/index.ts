import React, { useEffect, useRef } from 'react'

const containsTarget = (
  event: MouseEvent | TouchEvent,
  node: React.RefObject<HTMLElement>
) => {
  if (!node || !node.current) {
    return false
  }

  if (node.current.contains(<Node>event.target)) {
    return true
  }
  return false
}

export const useClickOutside = (
  nodes: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[],
  callback: () => void
) => {
  const savedCallback = useRef(callback)
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      if (Array.isArray(nodes)) {
        const resultNodes = nodes.map((node) => {
          return containsTarget(event, node)
        })

        if (!resultNodes.includes(true)) {
          savedCallback.current()
        }
      } else {
        const contains = containsTarget(event, nodes)
        if (!contains) {
          savedCallback.current()
        }
      }
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  }, [nodes])
}

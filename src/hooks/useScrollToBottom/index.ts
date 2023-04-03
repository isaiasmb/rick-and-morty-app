import { useEffect, useRef } from 'react'

const useScrollToBottom = <T extends HTMLElement>(
  onScrollBottom: () => void
) => {
  const ref = useRef() as React.MutableRefObject<T>

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY + window.innerHeight
      const scroll = ref.current.scrollHeight - top

      if (scroll < 300) {
        onScrollBottom()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [onScrollBottom])

  return ref
}

export default useScrollToBottom

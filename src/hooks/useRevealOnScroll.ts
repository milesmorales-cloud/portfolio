import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const useRevealOnScroll = <T extends HTMLElement>() => {
  const [isRevealed, setIsRevealed] = useState(prefersReducedMotion)
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const element = ref.current

    if (!element || isRevealed) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect()
          setIsRevealed(true)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [isRevealed])

  return { ref, isRevealed }
}

export default useRevealOnScroll
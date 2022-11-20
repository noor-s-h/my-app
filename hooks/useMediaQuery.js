import { useLayoutEffect, useState } from 'react'

export default function useMediaQuery(mediaQueryString) {
  const [matches, setMatches] = useState(null)

  useLayoutEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString)
    const listener = () => setMatches(!!mediaQueryList.matches)
    listener()
    mediaQueryList.addEventListener('change', listener)
    return () => mediaQueryList.removeEventListener('change', listener)
  }, [mediaQueryString])

  return matches
}

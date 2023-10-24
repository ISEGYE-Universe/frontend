import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
/**
 * https://stackoverflow.com/questions/69343932/how-to-detect-change-in-the-url-hash-in-next-js
 * 위 코드를 일부 수정
 * hash 변경을 감지하기 위한 hook
 */
const useUrlHash = (initialValue: string) => {
  const router = useRouter()
  const [hash, setHash] = useState<string>(initialValue)

  const updateHash = (str: string) => {
    if (!str) {
      // hash값이 없을 때에도 hash state 변경 처리
      setHash('')
      return
    }
    setHash(str.split('#')[1])
  }

  useEffect(() => {
    const onWindowHashChange = () => updateHash(window.location.hash)
    const onNextJSHashChange = (url: string) => updateHash(url)

    router.events.on('hashChangeStart', onNextJSHashChange)
    window.addEventListener('hashchange', onWindowHashChange)
    window.addEventListener('load', onWindowHashChange)
    return () => {
      router.events.off('hashChangeStart', onNextJSHashChange)
      window.removeEventListener('load', onWindowHashChange)
      window.removeEventListener('hashchange', onWindowHashChange)
    }
  }, [router.asPath, router.events])

  return hash
}

export default useUrlHash

import { useEffect } from 'react'

/**
 * Calls `onScroll` with the wheel delta while the hook is mounted.
 *
 * @param onScroll - Receives the vertical wheel delta.
 */
export const useWheel = (onScroll: (deltaY: number) => void): void => {
  /**
   * Subscribes to window wheel events for the lifetime of the hook.
   */
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      onScroll(e.deltaY)
    }

    window.addEventListener('wheel', handleWheel, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [onScroll])
}

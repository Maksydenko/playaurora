import { useEffect } from 'react'

interface UseWindowListenerOptions {
  isCallImmediately?: boolean
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  listener: (...args: any[]) => any
  options?: AddEventListenerOptions | boolean
  type: string
}

/**
 * Subscribes a listener to a window event while the hook is mounted.
 *
 * @param options - Event name, listener, and whether to call it immediately.
 */
export const useWindowListener = ({
  isCallImmediately,
  listener,
  options,
  type
}: UseWindowListenerOptions): void => {
  /**
   * Attaches the listener on mount and removes it on cleanup.
   */
  useEffect(() => {
    if (isCallImmediately) {
      listener()
    }

    window.addEventListener(type, listener, options)

    return () => {
      window.removeEventListener(type, listener, options)
    }
  }, [isCallImmediately, listener, options, type])
}

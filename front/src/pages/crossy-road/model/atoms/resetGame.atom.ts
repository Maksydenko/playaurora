import { atom } from 'jotai'

import { getPropertyValue, Time } from '@/shared/model'

import { gameStateAtom } from './gameState.atom'
import { resetPositionXAtom } from './positionX.atom'
import { resetRowsAtom } from './rows.atom'

/**
 * Starts a new run after the loading delay.
 */
export const resetGameAtom = atom(null, (_, set) => {
  const loaderTime = getPropertyValue('--crossy-road-loader-time')

  set(gameStateAtom, prev => ({
    ...prev,
    isLoading: true
  }))

  setTimeout(
    () => {
      set(resetPositionXAtom)
      set(resetRowsAtom)
      set(gameStateAtom, prev => ({
        ...prev,
        isEnded: false,
        resetCount: ++prev.resetCount
      }))
    },
    (loaderTime / 2) * Time.MillisecondsInSecond
  )
})

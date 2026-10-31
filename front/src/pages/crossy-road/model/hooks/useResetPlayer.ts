import { useEffect } from 'react'

import { useAtomValue } from 'jotai'
import type * as THREE from 'three'

import { gameStateAtom } from '../atoms'

import type { PlayerState } from '../types'

/**
 * Moves the chicken back to the origin when a run restarts.
 *
 * @param playerElement - Chicken group in the scene.
 * @param playerState - Pose that must match the mesh after a restart.
 */
export const useResetPlayer = (
  playerElement: null | THREE.Group<THREE.Object3DEventMap>,
  playerState: PlayerState
): void => {
  const gameState = useAtomValue(gameStateAtom)

  /**
   * Resets the mesh and pose when `resetCount` changes.
   *
   * @remarks The pose object is stable for a run, so it is not a dependency.
   */
  useEffect(
    () => {
      if (!playerElement) {
        return
      }

      playerElement.position.set(0, 0, 0)
      playerElement.rotation.z = 0
      playerElement.scale.z = 1

      playerState.rotation.z = 0
      playerState.position.x = 0
      playerState.position.y = 0
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [gameState.resetCount]
  )
}

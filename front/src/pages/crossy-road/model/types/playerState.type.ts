import type { Direction } from '@/shared/model'

/**
 * Chicken pose and the hops still waiting to play.
 */
export interface PlayerState {
  leapsQueue: Direction[]
  position: {
    x: number
    y: number
  }
  rotation: {
    z: number
  }
}

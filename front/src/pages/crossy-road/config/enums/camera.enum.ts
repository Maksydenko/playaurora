import type { ValueOf } from '@/shared/model'

/**
 * Offset of the orthographic camera from the player.
 */
export const CameraPosition = {
  X: 200,
  Y: -400,
  Z: 400
} as const
export type CameraPosition = ValueOf<typeof CameraPosition>

/**
 * Orthographic camera zoom for each layout width.
 */
export const CameraZoom = {
  Desktop: 4,
  Mobile: 2,
  Tablet: 3.2
} as const
export type CameraZoom = ValueOf<typeof CameraZoom>

import type { ValueOf } from '@/shared/model'

/**
 * Offset of the directional light from the player.
 */
export const LightPosition = {
  X: -400,
  Y: -200,
  Z: 400
} as const
export type LightPosition = ValueOf<typeof LightPosition>

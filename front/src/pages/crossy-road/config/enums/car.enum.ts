import type { ValueOf } from '@/shared/model'

/**
 * Car body size along each axis.
 */
export const CarSize = {
  X: 24,
  Y: 48,
  Z: 16
} as const
export type CarSize = ValueOf<typeof CarSize>

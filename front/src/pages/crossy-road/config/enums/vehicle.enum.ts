import type { ValueOf } from '@/shared/model'

/**
 * Inclusive range of a car's travel speed.
 */
export const VehicleSpeed = {
  Max: 120,
  Min: 80
} as const
export type VehicleSpeed = ValueOf<typeof VehicleSpeed>

/**
 * Wheel size along each axis.
 */
export const WheelSize = {
  X: 8,
  Y: 8,
  Z: 8
} as const
export type WheelSize = ValueOf<typeof WheelSize>

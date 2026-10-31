import type { ValueOf } from '../types'

/**
 * Standard gamepad button indexes from the Gamepad API.
 */
export const GamepadButton = {
  Cross: 0,
  Down: 13,
  L1: 4,
  L2: 6,
  L3: 10,
  Left: 14,
  Options: 9,
  PS: 16,
  R1: 5,
  R2: 7,
  R3: 11,
  Right: 15,
  Share: 8,
  Touchpad: 17,
  Up: 12
} as const
export type GamepadButton = ValueOf<typeof GamepadButton>

import type { ValueOf } from '../types'

/**
 * Cardinal directions used by input and movement.
 */
export const Direction = {
  Down: 'down',
  Left: 'left',
  Right: 'right',
  Up: 'up'
} as const
export type Direction = ValueOf<typeof Direction>

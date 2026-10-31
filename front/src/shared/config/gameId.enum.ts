import type { ValueOf } from '@/shared/model'

/**
 * Ids of games that can be opened from the home row.
 */
export const GameId = {
  CrossyRoad: 'crossy-road'
} as const
export type GameId = ValueOf<typeof GameId>

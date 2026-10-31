import type { ValueOf } from '@/shared/model'

/**
 * Inclusive range of a tree crown height.
 */
export const TreeHeight = {
  Max: 60,
  Min: 20
} as const
export type TreeHeight = ValueOf<typeof TreeHeight>

/**
 * Tree trunk size along each axis.
 */
export const TreeSize = {
  X: 10,
  Y: 10,
  Z: 20
} as const
export type TreeSize = ValueOf<typeof TreeSize>

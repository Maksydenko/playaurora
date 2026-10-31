import type { ValueOf } from '@/shared/model'

const TILE_MAX = 8
const TILE_MIN = -8

/**
 * Grass and road tile dimensions, in world units.
 */
export const Tile = {
  GrassSize: 4,
  Max: TILE_MAX,
  Min: TILE_MIN,
  PerRow: TILE_MAX - TILE_MIN + 1,
  Size: 40
} as const
export type Tile = ValueOf<typeof Tile>

/**
 * Kind of a map row.
 */
export const TileType = {
  Grass: 'grass',
  Road: 'road'
} as const
export type TileType = ValueOf<typeof TileType>

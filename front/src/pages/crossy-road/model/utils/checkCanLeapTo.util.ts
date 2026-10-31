import { getDefaultStore } from 'jotai'

import { Tile, TileType } from '../../config'

import { rowsAtom } from '../atoms'

const store = getDefaultStore()

/**
 * Reports whether the chicken can land on the tile at a world point.
 *
 * @param x - World position across the row.
 * @param y - World position along the road.
 * @returns `false` when a tree already occupies that grass tile.
 */
export const checkCanLeapTo = (x: number, y: number): boolean => {
  const rows = store.get(rowsAtom)

  const tileIndex = Math.round(x / Tile.Size)
  const rowIndex = Math.round(y / Tile.Size)

  const row = rows[rowIndex]

  if (!row || row.type === TileType.Road) {
    return true
  }

  if (row.type === TileType.Grass && row.treeIndexes?.has(tileIndex)) {
    return false
  }

  return true
}

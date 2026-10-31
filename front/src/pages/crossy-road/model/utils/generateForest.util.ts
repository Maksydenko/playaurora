import { nanoid } from 'nanoid'
import * as THREE from 'three'

import { Tile, TileType, TreeHeight } from '../../config'

import type { RowData } from '../types'

/**
 * Builds a grass row with the requested number of trees.
 *
 * @param length - How many trees to place. An empty row uses `0`.
 * @returns The grass row.
 */
export const generateForest = (length: number): RowData => {
  const occupiedTiles = new Set<number>()

  const trees = Array.from({ length }, () => {
    let tileIndex: number

    do {
      tileIndex = THREE.MathUtils.randInt(Tile.Min, Tile.Max)
    } while (occupiedTiles.has(tileIndex))

    occupiedTiles.add(tileIndex)

    return {
      height: THREE.MathUtils.randInt(TreeHeight.Min, TreeHeight.Max),
      id: nanoid(),
      tileIndex
    }
  })

  return {
    id: nanoid(),
    treeIndexes: occupiedTiles,
    trees,
    type: TileType.Grass
  }
}

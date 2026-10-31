import * as THREE from 'three'

import { Tile, TileType } from '../../config'

import { chooseRandomElement } from './chooseRandomElement.util'
import { generateForest } from './generateForest.util'
import { generateRoad } from './generateRoad.util'

import type { RowData } from '../types'

/**
 * Builds one grass or road row.
 *
 * @param isEmpty - When set, the row is grass with no trees.
 * @returns The generated row.
 */
export const generateRow = (isEmpty?: boolean): RowData => {
  if (isEmpty) {
    return generateForest(0)
  }

  const type = chooseRandomElement([TileType.Grass, TileType.Road])

  if (type === TileType.Road) {
    return generateRoad()
  }

  return generateForest(
    THREE.MathUtils.randInt(
      Math.round(Tile.PerRow / 4),
      Math.round(Tile.PerRow / 3)
    )
  )
}

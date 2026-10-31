import { nanoid } from 'nanoid'
import * as THREE from 'three'

import { Direction } from '@/shared/model'

import { Tile, TileType, vehicleColors, VehicleSpeed } from '../../config'

import { chooseRandomElement } from './chooseRandomElement.util'

import type { RowData } from '../types'

/**
 * Builds a road row with cars traveling one way.
 *
 * @returns The road row.
 */
export const generateRoad = (): RowData => {
  const direction: typeof Direction.Left | typeof Direction.Right =
    chooseRandomElement([Direction.Left, Direction.Right])
  const speed = THREE.MathUtils.randInt(VehicleSpeed.Min, VehicleSpeed.Max)
  const vehicles = []

  let pos = Tile.Min + THREE.MathUtils.randInt(0, 3)

  while (pos < Tile.PerRow) {
    vehicles.push({
      color: chooseRandomElement(vehicleColors),
      id: nanoid(),
      initialTileIndex: pos
    })

    const gap = THREE.MathUtils.randInt(3, 6)
    pos += gap
  }

  return {
    direction,
    id: nanoid(),
    speed,
    type: TileType.Road,
    vehicles
  }
}

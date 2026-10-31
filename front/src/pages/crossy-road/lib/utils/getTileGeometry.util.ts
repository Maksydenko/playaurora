import * as THREE from 'three'

import { Tile } from '../../config'

const boxGeometry = new THREE.BoxGeometry(Tile.Size, Tile.Size, Tile.GrassSize)
const planeGeometry = new THREE.PlaneGeometry(Tile.Size, Tile.Size)

/**
 * Returns the mesh for a grass tile or a road tile.
 *
 * @param isGrass - Grass uses a box. A road uses a flat plane.
 * @returns Geometry shared by every tile of that kind.
 */
export const getTileGeometry = (
  isGrass: boolean
): THREE.BoxGeometry | THREE.PlaneGeometry =>
  isGrass ? boxGeometry : planeGeometry

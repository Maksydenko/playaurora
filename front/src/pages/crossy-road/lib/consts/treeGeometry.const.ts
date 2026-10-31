import * as THREE from 'three'

import { TreeSize } from '../../config'

/**
 * Shared box used for a tree trunk.
 */
export const treeTrunkGeometry = new THREE.BoxGeometry(
  TreeSize.X,
  TreeSize.Y,
  TreeSize.Z
)

/**
 * Shared box scaled per tree for the crown.
 */
export const treeLeavesGeometry = new THREE.BoxGeometry(24, 24, 1)

import * as THREE from 'three'

import { WheelSize } from '../../config'

/**
 * Shared box used for every wheel.
 */
export const wheelGeometry = new THREE.BoxGeometry(
  WheelSize.X,
  WheelSize.Y,
  WheelSize.Z
)

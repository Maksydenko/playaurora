import * as THREE from 'three'

import { CarSize } from '../../config'

/**
 * Shared box used for a car body.
 */
export const carBodyGeometry = new THREE.BoxGeometry(
  CarSize.X,
  CarSize.Y,
  CarSize.Z
)

/**
 * Shared box used for a car window.
 */
export const carGlassGeometry = new THREE.BoxGeometry(
  CarSize.X - 4,
  CarSize.Y / 2,
  CarSize.Z
)

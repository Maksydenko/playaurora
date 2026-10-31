import * as THREE from 'three'

const geometryCache = new Map<number, THREE.BoxGeometry>()

/**
 * Returns a cached box for a tree crown of the given height.
 *
 * @param height - Crown height in world units.
 * @returns Geometry shared by crowns of that height.
 */
export const getTreeLeavesGeometry = (height: number): THREE.BoxGeometry => {
  if (!geometryCache.has(height)) {
    geometryCache.set(height, new THREE.BoxGeometry(24, 24, height))
  }

  return geometryCache.get(height)!
}

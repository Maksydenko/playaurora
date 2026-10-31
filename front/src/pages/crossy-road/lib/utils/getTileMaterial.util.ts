import * as THREE from 'three'

const materialCache = new Map<number, THREE.MeshLambertMaterial>()

/**
 * Returns a cached Lambert material for a tile color.
 *
 * @param color - Tile color as a Three.js hex number.
 * @returns Material shared by every tile of that color.
 */
export const getTileMaterial = (color: number): THREE.MeshLambertMaterial => {
  if (!materialCache.has(color)) {
    materialCache.set(color, new THREE.MeshLambertMaterial({ color }))
  }

  return materialCache.get(color)!
}

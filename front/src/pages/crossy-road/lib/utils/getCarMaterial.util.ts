import * as THREE from 'three'

const materialCache = new Map<number, THREE.MeshLambertMaterial>()

/**
 * Returns a cached Lambert material for a car body color.
 *
 * @param color - Body color as a Three.js hex number.
 * @returns Material shared by every car of that color.
 */
export const getCarMaterial = (color: number): THREE.MeshLambertMaterial => {
  if (!materialCache.has(color)) {
    materialCache.set(color, new THREE.MeshLambertMaterial({ color }))
  }

  return materialCache.get(color)!
}

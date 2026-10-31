import * as THREE from 'three'

/**
 * Shared Lambert material for tree trunks.
 */
export const treeTrunkMaterial = new THREE.MeshLambertMaterial({
  color: 0x472c2e
})

/**
 * Shared Lambert material for tree crowns.
 */
export const treeLeavesMaterial = new THREE.MeshLambertMaterial({
  color: 0x546311
})

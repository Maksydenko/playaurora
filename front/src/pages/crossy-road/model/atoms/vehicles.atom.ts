import { atom } from 'jotai'
import type { Object3D } from 'three'

/**
 * A car tracked for collision, including its scene object.
 */
export interface VehicleState {
  id: string
  ref: null | Object3D
  rowIndex: number
}

/**
 * Cars currently on the road.
 */
export const vehiclesAtom = atom<VehicleState[]>([])

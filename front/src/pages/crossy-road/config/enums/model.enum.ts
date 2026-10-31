import type { ValueOf } from '@/shared/model'

/**
 * Paths of glTF models used by Crossy Road.
 */
export const Model = {
  Chicken: '/models/crossy-road/chicken.glb'
} as const
export type Model = ValueOf<typeof Model>

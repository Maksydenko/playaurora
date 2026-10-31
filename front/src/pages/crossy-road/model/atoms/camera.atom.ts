import { atom } from 'jotai'
import type { OrthographicCamera } from 'three'

/**
 * Orthographic camera that follows the chicken.
 */
export const cameraAtom = atom<null | OrthographicCamera>(null)

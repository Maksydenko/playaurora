import { atom } from 'jotai'
import type { DirectionalLight } from 'three'

/**
 * Directional light that follows the chicken.
 */
export const lightAtom = atom<DirectionalLight | null>(null)

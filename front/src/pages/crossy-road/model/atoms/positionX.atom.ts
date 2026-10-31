import { atom } from 'jotai'

const INITIAL_POSITION_X = 0

const INITIAL_STATE = {
  currentX: INITIAL_POSITION_X,
  maxX: INITIAL_POSITION_X
}

/**
 * Chicken progress along the road, including the furthest tile reached.
 */
export const positionXAtom = atom(INITIAL_STATE)

/**
 * Records the chicken's current road position and extends the furthest point.
 */
export const updatePositionXAtom = atom(null, (_, set, currentX: number) => {
  set(positionXAtom, prev => ({
    currentX,
    maxX: currentX > prev.maxX ? currentX : prev.maxX
  }))
})

/**
 * Returns road progress to the start of a run.
 */
export const resetPositionXAtom = atom(null, (_, set) => {
  set(positionXAtom, INITIAL_STATE)
})

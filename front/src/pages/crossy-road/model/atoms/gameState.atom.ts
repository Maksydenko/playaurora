import { atom } from 'jotai'

const INITIAL_STATE = {
  isEnded: false,
  isLoading: true,
  resetCount: 0
}

/**
 * Run flags for loading, game over, and how many times the run has restarted.
 */
export const gameStateAtom = atom(INITIAL_STATE)

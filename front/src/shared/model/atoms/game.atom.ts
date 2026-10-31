import { atom } from 'jotai'

import type { GameId } from '@/shared/config'

/**
 * Id of the game open on the home screen, or `null` while the carousel is shown.
 */
export const gameAtom = atom<GameId | null>(null)

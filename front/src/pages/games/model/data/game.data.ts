import { GameId } from '@/shared/config'

import type { Game } from '../types'

/**
 * Playable games shown on the home row.
 */
export const gameData: Game[] = [
  {
    component: () =>
      import('@/pages/crossy-road/ui/CrossyRoad').then(m => ({
        default: m.CrossyRoad
      })),
    id: GameId.CrossyRoad,
    imageUrl: '/images/logos/games/crossy-road.png',
    title: 'Crossy Road'
  }
]

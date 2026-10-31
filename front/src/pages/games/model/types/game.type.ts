import type { ComponentType } from 'react'

import type { GameId } from '@/shared/config'

/**
 * Catalog entry for a playable game on the home games row.
 */
export interface Game {
  component: () => Promise<{ default: ComponentType }>
  id: GameId
  imageUrl: string
  title: string
}

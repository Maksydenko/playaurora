import type { Direction } from '@/shared/model'

import type { TileType } from '../../config'
import type { Tree } from './tree.type'
import type { Vehicle } from './vehicle.type'

/**
 * One generated map row, either grass or a road.
 */
export interface RowData {
  direction?: typeof Direction.Left | typeof Direction.Right
  id: string
  speed?: number
  treeIndexes?: Set<number>
  trees?: Tree[]
  type: TileType
  vehicles?: Vehicle[]
}

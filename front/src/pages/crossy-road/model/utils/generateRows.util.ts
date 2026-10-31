import { generateRow } from './generateRow.util'

import type { RowData } from '../types'

/**
 * Builds a sequence of map rows.
 *
 * @param length - How many rows to build.
 * @param isEmpty - When set, every row is empty grass.
 * @returns The generated rows, in order.
 */
export const generateRows = (length: number, isEmpty?: boolean): RowData[] =>
  Array.from({ length }, () => generateRow(isEmpty))

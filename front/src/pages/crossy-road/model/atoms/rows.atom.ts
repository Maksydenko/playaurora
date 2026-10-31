import { atom } from 'jotai'

import { generateRows } from '../utils'

import type { RowData } from '../types'

const INITIAL_EMPTY_ROW_NUMBER = 1
const INITIAL_ROW_NUMBER = 20
const INITIAL_FULL_ROW_NUMBER = INITIAL_ROW_NUMBER - INITIAL_EMPTY_ROW_NUMBER

/**
 * Map rows currently in the scene, starting with the opening stretch.
 */
export const rowsAtom = atom<RowData[]>([
  ...generateRows(INITIAL_EMPTY_ROW_NUMBER, true),
  ...generateRows(INITIAL_FULL_ROW_NUMBER)
])

/**
 * Appends newly generated rows to the map.
 */
export const addRowsAtom = atom(
  null,
  (
    get,
    set,
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    newRows: number = 1
  ) => {
    const prev = get(rowsAtom)

    set(rowsAtom, [...prev, ...generateRows(newRows)])
  }
)

/**
 * Restores the map to the opening rows.
 */
export const resetRowsAtom = atom(null, (_, set) => {
  set(rowsAtom, [
    ...generateRows(INITIAL_EMPTY_ROW_NUMBER, true),
    ...generateRows(INITIAL_FULL_ROW_NUMBER)
  ])
})

import type { Key } from 'react'

/**
 * A labeled choice used by menus and the game switcher.
 *
 * @typeParam T - Value stored for the choice.
 * @typeParam K - Label shown for the choice.
 */
export interface Option<T = string, K = string> {
  id: Key
  label: K
  value: T
}

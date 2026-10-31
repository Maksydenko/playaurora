import type { ValueOf } from '@/shared/model'

/**
 * App route paths used by navigation and route guards.
 */
export const Pathname = {
  Home: '/'
} as const
export type Pathname = ValueOf<typeof Pathname>

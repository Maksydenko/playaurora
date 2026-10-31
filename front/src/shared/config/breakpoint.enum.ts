import type { ValueOf } from '@/shared/model'

/**
 * Layout widths, in pixels, using the non-overlapping `*.98` edge.
 */
export const Breakpoint = {
  Desktop: 1023.98,
  Mobile: 767.98,
  MobileSmall: 479.98,
  Tablet: 991.98
} as const
export type Breakpoint = ValueOf<typeof Breakpoint>

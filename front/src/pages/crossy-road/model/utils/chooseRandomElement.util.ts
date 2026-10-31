/**
 * Picks one item from a list at random.
 *
 * @param arr - Items to choose from.
 * @returns One item from `arr`.
 */
export const chooseRandomElement = <T>(arr: readonly T[]): T =>
  arr[(Math.random() * arr.length) | 0]

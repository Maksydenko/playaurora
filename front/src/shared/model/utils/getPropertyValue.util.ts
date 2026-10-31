/**
 * Reads a numeric custom property from the document element.
 *
 * @param property - Custom property name, including the leading dashes.
 * @returns The parsed integer value.
 */
export const getPropertyValue = (property: string): number =>
  parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(property)
  )

/**
 * Capitalize a string
 * @param {string} str - the string to capitalize
 * @returns {string} the capitalized string
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

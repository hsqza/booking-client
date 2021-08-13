export const convertObjectMessageErrorsToString = (
  obj: Record<string, Array<string>> | string,
): string => {
  if (typeof obj === 'string') {
    return obj
  }
  return Object.entries(obj)
    .map((item) => {
      const [name, values] = item
      const arrMsg = values.join(', ')

      return `"${name}" - ${arrMsg} `
    })
    .toString()
}

export const capitalizeFirstLetter = (text) => {
  return text?.replace(/\b\w/g, (char) => char.toUpperCase())
}


// return the filename and extension of images only
const solve = (s: string) => {
  const matches = s.match(/(\w*):\/\/([\w\d-_\.]+):?(\d+)?/)
  return (matches != null) ? matches.slice(1) : []
}

export { solve }

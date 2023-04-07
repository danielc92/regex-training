
const solve = (s: string) => {
  const matches = s.match(/\d$/)

  return (matches != null) ? matches[0] : matches
}

export { solve }

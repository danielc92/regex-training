
const solve = (s: string) => {
  const result = s.match(/^[A-Z]+0*(\d+)$/)
  return result?.length === 2 ? result[1] : null
}

export { solve }

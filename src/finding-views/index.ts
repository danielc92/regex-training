
const solve = (s: string) => {
  const result = s.match(/^([\d,]+) views?/)
  return result === null ? [] : result[1]
}

export { solve }

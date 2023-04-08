
// match all words starting with the letter a
const solve = (s: string) => {
  return (s.match(/\ba\w+/gi) ?? []).length
}

export { solve }

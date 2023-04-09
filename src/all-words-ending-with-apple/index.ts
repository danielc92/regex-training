
// match all words ending with 'apple', inclusive of 'apple'
const solve = (s: string) => {
  return (s.match(/\w*apple\b/gi) ?? []).length
}

export { solve }

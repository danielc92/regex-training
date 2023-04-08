
// return words that start with a vowel and end in a consonant
const solve = (s: string) => {
  return /^[aoiue]+[a-z]*[^aoiue]$/i.test(s)
}

export { solve }


const solve = (s: string) => {
  // return 1 or more lowercase or space occurences

  return /[ a-z]+/.test(s)
}

export { solve }

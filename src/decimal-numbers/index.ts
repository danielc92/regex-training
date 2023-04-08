
const solve = (s: string) => {
  return /^-?([1-9]+\d*)?\.\d+$/.test(s)
}

export { solve }

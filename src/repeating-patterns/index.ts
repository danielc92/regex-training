
const solve = (s: string) => {
  return /(a{2,}|b{2,}|c{2,})/.test(s)
}

export { solve }

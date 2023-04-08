
const solve = (s: string, bannedWord: string) => {
  const result = s.match(
    new RegExp(`${bannedWord}`, 'ig'
    ))
  return (result ?? []).length
}

export { solve }

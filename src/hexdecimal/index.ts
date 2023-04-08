
// return valid hex code, ignoring valid codes of length 3 (ie. #fff)
const solve = (s: string) => {
  return /^#[a-f\d]{6}([a-f\d]{2})?$/i.test(s)
}

export { solve }

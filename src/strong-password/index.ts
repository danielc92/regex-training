/*
    rules:
    - 14+ chars
    - no space
    - must contain lower, upper, digit and special chars at least one of each
*/
const solve = (s: string) => {
  return /(?=^\S{14,}$)(?=.*\d+)(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[!@$#/\\()+_-]+)/.test(s)
}

export { solve }

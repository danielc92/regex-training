
/*
starts with 4
contains 16 OR 19 digits in total
contains only digits
*/
const solve = (s: string) => {
  return /^4\d{15}(\d{3})?$/.test(s)
}

export { solve }

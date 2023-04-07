
// return Jan 1995 AND 1995
// assumes years of 4 chars
const solve = (s: string)  => {
    return s.match(/\w+\s(\d{4})/)
}

export {solve}
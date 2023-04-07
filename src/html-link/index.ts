// validate a simple html link with no children elements
// ie children can only contain text
const solve = (s: string)  => {
    return /^<a\s+href='.*'\s*>[\w\s]+<\/a>$/.test(s)
}

export {solve}
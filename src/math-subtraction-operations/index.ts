
const solve = (s: string)  => {
    return /\d+ - \d+ =(\s|\s-\s)\d+/.test(s)
}

export {solve}
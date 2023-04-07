
// return the filename and extension of images only
const solve = (s: string)  => {
    return s.match(/^(\w+)\.(jpg|jpeg|gif|png)$/)
}

export {solve}

// return function, file and line number from 'E/( 1553):   at widget.List.makeView(ListView.java:1727)'
const solve = (s: string)  => {
    const result =  s.match(/\sat\s(.*)\((.*):(\d+)\)/)

    return result ? result.slice(1) : []
}

export {solve}
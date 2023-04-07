import { solve } from "."

it.each(
    [
        {
            input: "1. something",
            output: true
        },
        {
            input: "1.   something",
            output: true
        },
        {
            input: "1.            something",
            output: true
        },
        {
            input: "1. something else",
            output: true
        },
        {
            input: "1.something",
            output: false
        }
    ]
    
)("solving for $input should equal $output", ({input, output}) => {
    expect(solve(input)).toEqual(output)
})
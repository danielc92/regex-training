import { solve } from "."

it.each(
    [
        {
            input: "aabb",
            output: true
        }
    ,
    {
        input: "bbbbbbb",
        output: true
    },
    {
        input: "bb",
        output: true
    },
    {
        input: "bccc",
        output: true
    },
    {
        input: "ab",
        output: false
    },
    {
        input: "x",
        output: false
    }
    
    ]
)("solving for $input should equal $output", ({input, output}) => {
    expect(solve(input)).toEqual(output)
})
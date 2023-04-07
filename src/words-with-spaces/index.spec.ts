import { solve } from "."

it.each(
    [
        {
            input: "",
            output: false
        },
        {
            input: "pit",
            output: true
        },
        {
            input: "spot",
            output: true
        },
        {
            input: "pit spot",
            output: true
        },
        {
            input: "respite",
            output: true
        }
    ]
)("solving for $input should equal $output", ({input, output}) => {
    expect(solve(input)).toEqual(output)
})
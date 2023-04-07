import { solve } from "."

it.each(
    [
        {
            input: "",
            output: null
        }
    ]
)("solving for $input should equal $output", ({input, output}) => {
    expect(solve(input)).toEqual(output)
})
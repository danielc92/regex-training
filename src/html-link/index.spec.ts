import { solve } from "."

it.each(
    [
        {
            input: "<a href='https://github.com'>visit</a>",
            output: true
        },
        {
            input: "<a href='https://github.com'>visit this website</a>",
            output: true
        },
        {
            input: "<a href='/visit'>visit</a>",
            output: true
        },
        {
            input: "<a   href='#'  >visit</a>",
            output: true
        },
        {
            input: "<a href='https://github.com'>visit</a>>",
            output: false
        },
        {
            input: "<a>visit</a>",
            output: false
        },
        {
            input: "<a href='#'>visit<a>",
            output: false
        }
    ]
)("solving for $input should equal $output", ({input, output}) => {
    expect(solve(input)).toEqual(output)
})
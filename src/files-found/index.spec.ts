import { solve } from "."

it.each(
    [
        {
            input: "123 files found?",
            output: true
        },
        {
            input: "3 files found?",
            output: true
        },
        {
            input: "1 file found?",
            output: true
        },
        {
            input: "16584674 files found?",
            output: true
        },
        {
            input: "No files",
            output: false
        },
        {
            input: "No files found",
            output: false
        },
        {
            input: "No files found.",
            output: false
        }
    ]
)("solving for $input should equal $output", ({input, output}) => {
    expect(solve(input)).toEqual(output)
})
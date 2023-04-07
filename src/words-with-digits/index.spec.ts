import { solve } from "."

it.each(
    [

        {
            input: "rap them",
            output: true
        },
        {
            input: "rapeth",
            output: true
        },
        {
            input: "apth",
            output: true
        },
        {
            input: "wrap/try",
            output: true
        },
        {
            input: "sap tray",
            output: true
        },
        {
            input: "54ap52th",
            output: true
        },
    ]
)("solving for $input should equal $output", ({input, output}) => {
    expect(solve(input)).toEqual(output)
})
import { solve } from "."

it.each(
    [
        {
            input: "assumes word senses. Within",
            output: true
        },
        {
            input: "always thought so.) Then",
            output: true
        },
        {
            input: "it wasn't hers!' She replied",
            output: true
        },
        {
            input: "mess! He did not let it",
            output: true
        },
        {
            input: "he arrive.\" After she had",
            output: true
        },
        {
            input: "but when? It was hard to tell",
            output: true
        },
        {
            input: "does the clustering. In the",
            output: true
        },
        {
            input: "does the c344ustering. In the",
            output: false
        }
    ]
)("solving for $input should equal $output", ({input, output}) => {
    expect(solve(input)).toEqual(output)
})
import { solve } from '.'

it.each(
  [
    {
      input: ['the quick red fox jumped over the red dog', 'red'],
      output: 2
    },
    {
      input: ['the RED quick red fox jumped over the red dog', 'red'],
      output: 3
    },
    {
      input: ['the quick ReD fox jumped over the brown dog', 'red'],
      output: 1
    },
    {
      input: ['the gun was drawn quickly', 'GUN'],
      output: 1
    },
    {
      input: ['the GUN was drawn quickly', 'gun'],
      output: 1
    }
  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input[0], input[1])).toEqual(output)
})

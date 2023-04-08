import { solve } from '.'

it.each(
  [
    {
      input: 'angry apple',
      output: 2
    },
    {
      input: 'because orange apple',
      output: 1
    },
    {
      input: 'because orange other pear',
      output: 0
    },
    {
      input: 'because orange other pear another another apple apple apple',
      output: 5
    },
    {
      input: 'because orange apple orange apple orange apple',
      output: 3
    },
    {
      input: 'whe n ANOTHER other apricot apple true avalanche',
      output: 4
    }
  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})

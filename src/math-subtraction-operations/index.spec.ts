import { solve } from '.'

it.each(
  [
    {
      input: '12 - 12 = 0',
      output: true
    },
    {
      input: '12 - 13 = - 1',
      output: true
    },
    {
      input: '0 - 0 = 0',
      output: true
    },
    {
      input: '25 - 0 = 25',
      output: true
    },
    {
      input: '0 - 13 = - 13',
      output: true
    },
    {
      input: '6 - 3 = 3',
      output: true
    }
  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})

import { solve } from '.'

it.each(
  [
    {
      input: 'other crabapple apple kapple lapple red blue blapple',
      output: 5
    },
    {
      input: 'other crabapple apple kapple  red blue blapple',
      output: 4
    },
    {
      input: 'other crabapple blapple',
      output: 2
    },
    {
      input: 'appleappleapple apple apple other words here',
      output: 3
    },
    {
      input: 'other orange pear find words our other',
      output: 0
    },

    {
      input: 'other crabapple apple ghapple kapple lapple red blue blapple',
      output: 6
    }
  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})

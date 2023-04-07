import { solve } from '.'

it.each(
  [
    {
      input: 'Mick',
      output: true
    }, {
      input: 'candlestick',
      output: true
    },
    {
      input: 'stick',
      output: true
    },
    {
      input: 'shick',
      output: true
    },
    {
      input: 'icky',
      output: false
    },
    {
      input: 'snicker',
      output: false
    },
    {
      input: 'sunstricken',
      output: false
    }
  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})

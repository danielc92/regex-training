import { solve } from '.'

it.each(
  [
    {
      input: '',
      output: null
    },
    {
      input: 'abc',
      output: null
    },
    {
      input: '1',
      output: '1'
    },
    {
      input: '123',
      output: '3'
    },
    {
      input: 'a2',
      output: '2'
    }
  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})

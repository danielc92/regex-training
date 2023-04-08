import { solve } from '.'

it.each(
  [
    {
      input: 'XYZLTDPTY000123',
      output: '123'
    },
    {
      input: 'XYZLTDPTY987123',
      output: '987123'
    },
    {
      input: 'XYZLTDPTY187123',
      output: '187123'
    },
    {
      input: 'XYZLTDPTY087123',
      output: '87123'
    },
    {
      input: 'XYZLTDPTY000653',
      output: '653'
    },
    {
      input: 'XYZLTDPTY000005',
      output: '5'
    }
  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})

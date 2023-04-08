import { solve } from '.'

it.each(
  [
    {
      input: '',
      output: true
    },
    {
      input: ' ',
      output: true
    },
    {
      input: '  ',
      output: true
    },
    {
      input: '      ',
      output: true
    },
    {
      input: '                   ',
      output: true
    },
    {
      input: 'test',
      output: false
    },
    {
      input: 'test ',
      output: false
    },
    {
      input: ' test',
      output: false
    }
  ]
)('solving for $input should equal $output', ({ input, output }) => {
  expect(solve(input)).toEqual(output)
})
